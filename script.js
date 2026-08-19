/* ==========================================================
   Toolzyro — rendering logic
   Reads the global TOOLS array from data/tools.js
   ========================================================== */

const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const toolCountEl = document.getElementById('toolCount');
const emptyState = document.getElementById('emptyState');
const emptyQuery = document.getElementById('emptyQuery');
const filterPills = document.querySelectorAll('.filter-pill');
const categorySelect = document.getElementById('categorySelect');
const footerYear = document.getElementById('footerYear');

let activeTier = 'all';
let activeCategory = 'all';
let query = '';

// Populate the category dropdown from CATEGORIES (defined in data/tools.js)
if (categorySelect && typeof CATEGORIES !== 'undefined') {
  CATEGORIES.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}

if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()}`;
}

// Fallback icon colors, picked by hashing the tool name so it's stable
const PALETTE = ['#FF6B35', '#FFC145', '#4ECDC4', '#7C83FD', '#F25F5C', '#7FB069'];

function hashColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

// If a tool doesn't specify an image, pull its favicon automatically from its URL
function faviconUrl(url) {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
  } catch (e) {
    return '';
  }
}

function isNew(dateAdded) {
  const added = new Date(dateAdded);
  const now = new Date();
  const diffDays = (now - added) / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= 7;
}

function tierLabel(tier) {
  return { free: 'Free', freemium: 'Freemium', premium: 'Premium' }[tier] || tier;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function render() {
  const q = query.trim().toLowerCase();

  const filtered = TOOLS
    .filter(t => {
      const matchesTier = activeTier === 'all' || t.tier === activeTier;
      const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
      const matchesQuery = !q ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return matchesTier && matchesCategory && matchesQuery;
    })
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  toolCountEl.textContent = TOOLS.length;
  grid.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.hidden = false;
    emptyQuery.textContent = query;
    return;
  }
  emptyState.hidden = true;

  filtered.forEach(t => {
    const card = document.createElement('article');
    card.className = `tool-card tier-${t.tier}`;

    const img = t.image || faviconUrl(t.url);
    const initial = t.name.charAt(0).toUpperCase();
    const fallbackColor = hashColor(t.name);

    card.innerHTML = `
      ${isNew(t.dateAdded) ? '<span class="new-ribbon">New</span>' : ''}
      <div class="card-top">
        <div class="tool-icon" style="background:${fallbackColor}">
          <img src="${img}" alt="" loading="lazy" onerror="this.remove()">
          <span class="icon-fallback">${initial}</span>
        </div>
        <h3 class="tool-name">${escapeHtml(t.name)}</h3>
      </div>
      <p class="tool-desc">${escapeHtml(t.description)}</p>
      <p class="tool-category">${escapeHtml(t.category || '')}</p>
      <div class="card-bottom">
        <span class="tier-badge tier-${t.tier}">${tierLabel(t.tier)}</span>
        <a class="visit-link" href="${t.url}" target="_blank" rel="noopener noreferrer">Visit →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeTier = pill.dataset.tier;
    render();
  });
});

searchInput.addEventListener('input', e => {
  query = e.target.value;
  render();
});

if (categorySelect) {
  categorySelect.addEventListener('change', e => {
    activeCategory = e.target.value;
    render();
  });
}

// Header + footer "quick link" pills (All / Free / Freemium / Premium)
document.querySelectorAll('[data-tier-link]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tier = link.dataset.tierLink;
    activeTier = tier;
    filterPills.forEach(p => p.classList.toggle('active', p.dataset.tier === tier));
    render();
    document.getElementById('grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

render();
