// src/utils/urlHelper.js - Clean Semantic Category & Item URLs with SEO & AEO Optimization

export function slugifyTitle(title = '') {
  if (!title) return 'item';
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s\u0980-\u09FF-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 65) || 'item';
}

/**
 * Returns clean, human-readable semantic URL based on Category ID & Item Name:
 * e.g. /category/3/premium-soft-peach-finish-baby-cotton-romper-set
 */
export function getProductUrl(product) {
  if (!product) return '/';
  const catId = product.category_id || '1';
  const slug = slugifyTitle(product.title);
  return `/category/${catId}/${slug}`;
}

export function getProductFullUrl(product) {
  if (!product) return 'https://aponhat-store.vercel.app/';
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aponhat-store.vercel.app';
  return `${origin}${getProductUrl(product)}`;
}

/**
 * Universal Route Parser supporting:
 * - /
 * - /admin
 * - /checkout
 * - /order-success
 * - /category/:catId
 * - /category/:catId/:itemSlug (e.g. /category/3/premium-soft-peach-finish-baby-cotton-romper-set)
 * - /category/:catId/item/:itemSlug (e.g. /category/3/item/premium-soft-peach-finish-baby-cotton-romper-set)
 * - /category/:catId/:productId-:itemSlug
 * - /item/:itemSlug
 * - /product/:itemSlug or /product/:id
 */
export function parseAppPathname(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  if (clean === '/admin') return { view: 'admin', catId: 'all' };
  if (clean === '/checkout') return { view: 'checkout', catId: 'all' };
  if (clean === '/order-success') return { view: 'order_success', catId: 'all' };

  // 1. Direct /product/:item or /item/:item
  if (clean.startsWith('/product/') || clean.startsWith('/item/')) {
    const raw = clean.replace(/^\/(product|item)\//, '').split('/')[0];
    const decoded = decodeURIComponent(raw);
    const matchId = decoded.match(/^(\d{6,})/);
    const prodId = matchId ? matchId[1] : decoded;
    return {
      view: 'home',
      productId: prodId || decoded,
      productSlug: decoded,
      catId: 'all'
    };
  }

  // 2. Hierarchical /category/:catId and /category/:catId/:item or /category/:catId/item/:item
  if (clean.startsWith('/category/')) {
    const parts = clean.replace('/category/', '').split('/').filter(Boolean);
    if (parts.length >= 2) {
      const catId = decodeURIComponent(parts[0]);
      let rawItem = decodeURIComponent(parts[1]);
      if (rawItem === 'item' && parts[2]) {
        rawItem = decodeURIComponent(parts[2]);
      }
      const matchId = rawItem.match(/^(\d{6,})/);
      const prodId = matchId ? matchId[1] : (rawItem.includes('-') && /^\d+$/.test(rawItem.split('-')[0]) ? rawItem.split('-')[0] : rawItem);
      return {
        view: 'home',
        catId: catId,
        productId: prodId || rawItem,
        productSlug: rawItem
      };
    } else if (parts.length === 1) {
      return { view: 'home', catId: decodeURIComponent(parts[0]) };
    }
  }

  return { view: 'home', catId: 'all' };
}

/**
 * Robust product matcher: finds a product by ID, title slug, custom slug, or combined string
 */
export function findProductInList(param, products = []) {
  if (!param || !Array.isArray(products) || products.length === 0) return null;
  const str = String(param).trim().toLowerCase();
  const cleanId = str.match(/^(\d{6,})/) ? str.match(/^(\d{6,})/)[1] : null;
  const slug = slugifyTitle(str);

  return products.find(p => {
    // 1. Direct numeric ID match
    if (cleanId && String(p.id) === cleanId) return true;
    if (String(p.id).toLowerCase() === str) return true;

    // 2. Exact Title Slug match (e.g. premium-soft-peach-finish-baby-cotton-romper-set)
    const pSlug = slugifyTitle(p.title);
    if (pSlug === str || pSlug === slug) return true;

    // 3. Custom p.slug match
    if (p.slug && (p.slug.toLowerCase() === str || p.slug.toLowerCase() === slug)) return true;

    // 4. Prefix or substring match for combined ID-slug strings
    if (cleanId && str.includes(String(p.id))) return true;
    if (str.includes(pSlug)) return true;

    return false;
  }) || null;
}
