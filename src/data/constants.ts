// Constantes de la aplicación

export const APP_CONFIG = {
  name: 'FigureStore',
  description: 'Figuras Anime de Calidad',
  url: 'https://figurestore.com',
  phone: '+51 949 799 869',
  whatsapp: 'https://wa.me/51949799869',
  email: 'contacto@figurestore.com'
} as const;

export const PRODUCT_CATEGORIES = {
  'scale-figures': 'Figuras a Escala',
  'nendoroid': 'Nendoroid',
  'figma': 'Figma',
  'pop-up-parade': 'Pop Up Parade'
} as const;

export const PRODUCT_STATUS = {
  'Disponible': 'Disponible',
  'Preventa': 'Preventa',
  'Agotado': 'Agotado'
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 50
} as const;

export const STORAGE_KEYS = {
  CART: 'figure-store-cart',
  WISHLIST: 'figure-store-wishlist',
  USER_PREFERENCES: 'figure-store-preferences'
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;
