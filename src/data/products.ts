// Archivo centralizado para todos los productos
import type { Product } from '../types/product';
import { allFigures as scaleFigures } from './products/figures';
import { allNendoroids } from './products/nendoroids';
import { allFigma } from './products/figma';
import { allPopUpParade } from './products/pop-up-parade';

// Exportar todos los productos
export const allFigures: Product[] = [
  ...scaleFigures,
  ...allNendoroids,
  ...allFigma,
  ...allPopUpParade,
];

// Re-exportar tipos para compatibilidad
export type { Product } from '../types/product';
