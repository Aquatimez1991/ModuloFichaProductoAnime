import type { Product } from '../types/product';
import { allFigures } from '../data/products';

// Obtener todos los productos
export function getAllProducts(): Product[] {
  return allFigures;
}

// Obtener productos por categoría
export function getProductsByCategory(category: string): Product[] {
  const allProducts = getAllProducts();
  return allProducts.filter(product => product.category === category);
}

// Obtener producto por ID
export function getProductById(id: number): Product | undefined {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id);
}

// Obtener productos destacados
export function getFeaturedProducts(limit: number = 6): Product[] {
  const allProducts = getAllProducts();
  return allProducts.filter(product => product.isPopular).slice(0, limit);
}

// Obtener productos nuevos
export function getNewProducts(limit: number = 4): Product[] {
  const allProducts = getAllProducts();
  return allProducts.filter(product => product.isNew).slice(0, limit);
}

// Buscar productos por nombre
export function searchProducts(query: string): Product[] {
  const allProducts = getAllProducts();
  const searchTerm = query.toLowerCase();

  return allProducts.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.manufacturer.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );
}

// Obtener productos con descuento
export function getDiscountedProducts(): Product[] {
  const allProducts = getAllProducts();
  return allProducts.filter(product => product.originalPrice > product.price);
}

// Obtener productos por fabricante
export function getProductsByManufacturer(manufacturer: string): Product[] {
  const allProducts = getAllProducts();
  return allProducts.filter(
    product => product.manufacturer.toLowerCase() === manufacturer.toLowerCase()
  );
}

// Obtener estadísticas de productos
export function getProductStats() {
  const allProducts = getAllProducts();

  return {
    total: allProducts.length,
    byCategory: {
      'scale-figures': allProducts.filter(p => p.category === 'scale-figures')
        .length,
      nendoroid: allProducts.filter(p => p.category === 'nendoroid').length,
      figma: allProducts.filter(p => p.category === 'figma').length,
      'pop-up-parade': allProducts.filter(p => p.category === 'pop-up-parade')
        .length,
    },
    byManufacturer: allProducts.reduce(
      (acc, product) => {
        acc[product.manufacturer] = (acc[product.manufacturer] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    ),
    averagePrice:
      allProducts.reduce((sum, product) => sum + product.price, 0) /
      allProducts.length,
    totalStock: allProducts.reduce((sum, product) => sum + product.stock, 0),
  };
}

// Función para generar ID único (útil para agregar nuevos productos)
export function generateUniqueId(): number {
  const allProducts = getAllProducts();
  const maxId = Math.max(...allProducts.map(p => p.id));
  return maxId + 1;
}

// Función para validar un producto
export function validateProduct(product: Partial<Product>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!product.name) errors.push('El nombre es requerido');
  if (!product.manufacturer) errors.push('El fabricante es requerido');
  if (!product.price || product.price <= 0)
    errors.push('El precio debe ser mayor a 0');
  if (!product.category) errors.push('La categoría es requerida');
  if (!product.image) errors.push('La imagen principal es requerida');
  if (!product.description) errors.push('La descripción es requerida');
  if (!product.stock || product.stock < 0)
    errors.push('El stock debe ser mayor o igual a 0');

  return {
    isValid: errors.length === 0,
    errors,
  };
}
