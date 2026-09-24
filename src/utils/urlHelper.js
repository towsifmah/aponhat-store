// src/utils/urlHelper.js - SEO & AEO friendly category and product URLs

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
 * Returns SEO-friendly URL formatted as /category/:catId/:productId-:slug
 * e.g. /category/1/26081800002594-premium-oxford-cotton-slim-fit-formal-shirt-for-men
 */
export function getProductUrl(product) {
  if (!product) return '/';
  const catId = product.category_id || '1';
  const slug = slugifyTitle(product.title);
  return `/category/${catId}/${product.id}-${slug}`;
}

export function getProductFullUrl(product) {
  if (!product) return 'https://aponhat-store.vercel.app/';
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aponhat-store.vercel.app';
  return `${origin}${getProductUrl(product)}`;
}

/**
 * Robust Route Parser supporting:
 * - /
 * - /admin
 * - /checkout
 * - /order-success
 * - /category/:catId
 * - /category/:catId/:productId-:slug
 * - /category/:catId/:productId
 * - /product/:productId
 * - /product/:productId-:slug
 */
export function parseAppPathname(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  if (clean === '/admin') return { view: 'admin', catId: 'all' };
  if (clean === '/checkout') return { view: 'checkout', catId: 'all' };
  if (clean === '/order-success') return { view: 'order_success', catId: 'all' };

  // 1. Direct /product/:id or /product/:id-:slug
  if (clean.startsWith('/product/')) {
    const raw = clean.replace('/product/', '').split('/')[0];
    const decoded = decodeURIComponent(raw);
    const matchId = decoded.match(/^(\d{6,})/);
    const prodId = matchId ? matchId[1] : decoded.split('-')[0];
    return {
      view: 'product',
      productId: prodId || decoded,
      productSlug: decoded,
      catId: 'all'
    };
  }

  // 2. Hierarchical /category/:catId and /category/:catId/:item
  if (clean.startsWith('/category/')) {
    const parts = clean.replace('/category/', '').split('/').filter(Boolean);
    if (parts.length >= 2) {
      const catId = decodeURIComponent(parts[0]);
      const rawItem = decodeURIComponent(parts[1]);
      const matchId = rawItem.match(/^(\d{6,})/);
      const prodId = matchId ? matchId[1] : rawItem;
      return {
        view: 'product',
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
