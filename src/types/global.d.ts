// Tipos globales para el proyecto RabbitVault

declare global {
  interface Window {
    addToCart: (figureId: number) => void;
    buyNow: (figureId: number) => void;
    openCart: () => void;
    openWishlist: () => void;
    removeFromCart: (figureId: number) => void;
    removeFromWishlist: (figureId: number) => void;
    addToCartFromWishlist: (figureId: number) => void;
    updateQuantity: (figureId: number, quantity: number) => void;
    handleSearch: (event: Event) => void;
  }
}

export {};
