// ══════════════════════════════════════
// GLOBAL STATE
// ══════════════════════════════════════

const State = {
  // Auth
  user: null,           // { name, email } or null

  // Cart: array of { ...product, qty, trackingId }
  cart: [],

  // Wishlist: Set of product ids
  wishlist: new Set(),

  // Orders history: array of order objects
  orders: [],

  // Delivery location
  location: { country: '🇵🇰 Pakistan', city: 'Lahore' },

  // UI
  activeFilter:      'all',
  filteredProducts:  [...PRODUCTS],
  currentProductId:  null,
  modalQty:          1,
  heroIndex:         0,

  // Toast timer
  toastTimer: null
};

// ── Tracking ID generator ──────────────
function generateTrackingId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'AMZ-';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    if (i < 2) id += '-';
  }
  return id;
}

// ── Order ID generator ─────────────────
function generateOrderId() {
  return '112-' + Math.floor(1000000 + Math.random() * 9000000) + '-' +
         Math.floor(1000000 + Math.random() * 9000000);
}

// ── Stars renderer ─────────────────────
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(empty);
}

// ── Savings pct ────────────────────────
function savingsPct(price, original) {
  if (!original) return null;
  return Math.round((1 - price / original) * 100);
}

// ── Badge class ────────────────────────
function badgeClass(badge) {
  const map = { NEW: 'new', DEAL: 'deal', HOT: 'hot', SALE: '' };
  return map[badge] || '';
}

// ── Estimated delivery ─────────────────
function estimatedDelivery(prime) {
  const d = new Date();
  d.setDate(d.getDate() + (prime ? 2 : 7));
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}
