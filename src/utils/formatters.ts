// Formatters para datos de productos

/**
 * Formatea precio en formato de moneda peruana
 */
export function formatPrice(price: number): string {
  return `S/. ${price.toLocaleString('es-PE')}`;
}

/**
 * Calcula el porcentaje de descuento
 */
export function calculateDiscount(
  originalPrice: number,
  currentPrice: number
): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

/**
 * Formatea el rating con estrellas
 */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

/**
 * Formatea el número de reseñas
 */
export function formatReviews(reviews: number): string {
  if (reviews >= 1000) {
    return `${(reviews / 1000).toFixed(1)}k`;
  }
  return reviews.toString();
}

/**
 * Formatea la fecha de lanzamiento
 */
export function formatReleaseDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Trunca texto a una longitud específica
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Genera slug para URLs
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
