// Store simple para Astro usando localStorage
export interface CartItem {
  [key: number]: number;
}

export interface Store {
  cart: CartItem;
  wishlist: number[];
}

const STORAGE_KEY = 'figure-store';

// Obtener datos del store
export function getStore(): Store {
  if (typeof window === 'undefined') {
    return { cart: {}, wishlist: [] };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { cart: {}, wishlist: [] };
    }
  }
  return { cart: {}, wishlist: [] };
}

// Guardar datos del store
export function saveStore(store: Store): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

// Funciones del carrito
export function addToCart(figureId: number): void {
  const store = getStore();
  store.cart[figureId] = (store.cart[figureId] || 0) + 1;
  saveStore(store);
}

export function removeFromCart(figureId: number): void {
  const store = getStore();
  delete store.cart[figureId];
  saveStore(store);
}

export function updateCartQuantity(figureId: number, quantity: number): void {
  const store = getStore();
  if (quantity <= 0) {
    delete store.cart[figureId];
  } else {
    store.cart[figureId] = quantity;
  }
  saveStore(store);
}

export function clearCart(): void {
  const store = getStore();
  store.cart = {};
  saveStore(store);
}

export function getCartItemCount(): number {
  const store = getStore();
  return Object.values(store.cart).reduce((sum, quantity) => sum + quantity, 0);
}

// Funciones de wishlist
export function toggleWishlist(figureId: number): void {
  const store = getStore();
  if (store.wishlist.includes(figureId)) {
    store.wishlist = store.wishlist.filter(id => id !== figureId);
  } else {
    store.wishlist.push(figureId);
  }
  saveStore(store);
}

export function isInWishlist(figureId: number): boolean {
  const store = getStore();
  return store.wishlist.includes(figureId);
}
