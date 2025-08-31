import type { Product } from '@/types/product';
import { PRODUCT_CATEGORIES, PRODUCT_STATUS } from '@/data/constants';

/**
 * Valida si un producto tiene todos los campos requeridos
 */
export function validateProduct(product: Partial<Product>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Validaciones básicas
  if (!product.name?.trim()) {
    errors.push('El nombre es requerido');
  }

  if (!product.manufacturer?.trim()) {
    errors.push('El fabricante es requerido');
  }

  if (!product.price || product.price <= 0) {
    errors.push('El precio debe ser mayor a 0');
  }

  if (
    !product.category ||
    !Object.keys(PRODUCT_CATEGORIES).includes(product.category)
  ) {
    errors.push('La categoría es requerida y debe ser válida');
  }

  if (
    !product.status ||
    !Object.keys(PRODUCT_STATUS).includes(product.status)
  ) {
    errors.push('El estado es requerido y debe ser válido');
  }

  if (!product.image?.trim()) {
    errors.push('La imagen principal es requerida');
  }

  if (!product.description?.trim()) {
    errors.push('La descripción es requerida');
  }

  if (product.stock === undefined || product.stock < 0) {
    errors.push('El stock debe ser mayor o igual a 0');
  }

  if (
    product.rating !== undefined &&
    (product.rating < 0 || product.rating > 5)
  ) {
    errors.push('El rating debe estar entre 0 y 5');
  }

  if (product.reviews !== undefined && product.reviews < 0) {
    errors.push('Las reseñas deben ser mayor o igual a 0');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Valida si una URL de imagen es válida
 */
export function validateImageUrl(url: string): boolean {
  if (!url?.trim()) return false;

  // Validar que sea una URL válida o una ruta local
  const urlPattern = /^(https?:\/\/|\/)/;
  return urlPattern.test(url);
}

/**
 * Valida si un email es válido
 */
export function validateEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

/**
 * Valida si un número de teléfono es válido
 */
export function validatePhone(phone: string): boolean {
  const phonePattern = /^\+?[\d\s\-()]+$/;
  return phonePattern.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Sanitiza texto para prevenir XSS
 */
export function sanitizeText(text: string): string {
  return text.replace(/[<>]/g, '').trim();
}

/**
 * Valida si un ID es válido
 */
export function validateId(id: number): boolean {
  return Number.isInteger(id) && id > 0;
}
