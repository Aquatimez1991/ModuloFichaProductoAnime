// Constantes de la aplicación
export const APP_NAME = 'RabbitVault';
export const APP_DESCRIPTION =
  'Tienda especializada en figuras anime auténticas';
export const APP_URL = 'https://rabbitvault.com';
export const CONTACT_EMAIL = 'ventas@rabbitvault.com';

export const APP_CONFIG = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: APP_URL,
  phone: '+51 949 799 869',
  whatsapp: 'https://wa.me/51949799869',
  email: CONTACT_EMAIL,
} as const;

export const PRODUCT_CATEGORIES = {
  'scale-figures': 'Figuras a Escala',
  nendoroid: 'Nendoroid',
  figma: 'Figma',
  'pop-up-parade': 'Pop Up Parade',
  'model-kits': 'Model Kits',
} as const;

export const PRODUCT_STATUS = {
  Disponible: 'Disponible',
  Preventa: 'Preventa',
  Agotado: 'Agotado',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 50,
} as const;

export const STORAGE_KEYS = {
  CART: 'rabbitvault-cart',
  WISHLIST: 'rabbitvault-wishlist',
  USER_PREFERENCES: 'rabbitvault-preferences',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
