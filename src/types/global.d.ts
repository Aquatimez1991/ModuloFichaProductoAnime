// Tipos globales para el proyecto RabbitVault

declare global {
  interface Window {
    addToCart: (figureId: number | string) => void;
    buyNow: (figureId: number | string) => void;
    buyNowGlobal: (figureId: number) => void;
    buyNowWithQuantity: (figureId: number, quantity: number) => void;
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
