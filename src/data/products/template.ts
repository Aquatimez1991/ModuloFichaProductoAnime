import type { Product } from '../../types/product';

// Plantilla para crear nuevos productos
export const productTemplate: Omit<Product, 'id'> = {
  name: 'Nombre del Producto',
  manufacturer: 'Fabricante',
  price: 0,
  originalPrice: 0,
  rating: 0,
  reviews: 0,
  status: 'Disponible',
  category: 'scale-figures', // scale-figures | nendoroid | figma | pop-up-parade | model-kits
  scale: '1/7',
  height: '0cm',
  material: 'PVC & ABS',
  image: 'URL_DE_LA_IMAGEN_PRINCIPAL',
  isNew: true,
  isPopular: false,
  stock: 1,
  description: 'Descripción detallada del producto...',
  features: [
    'Característica 1',
    'Característica 2',
    'Característica 3',
    'Característica 4',
  ],
  images: ['URL_IMAGEN_1', 'URL_IMAGEN_2', 'URL_IMAGEN_3'],
  releaseDate: 'YYYY-MM-DD',
};

// Función para crear un nuevo producto usando la plantilla
export async function createNewProduct(overrides: Partial<Product>): Promise<Product> {
  // Importar dinámicamente para evitar dependencias circulares
  const { generateUniqueId } = await import('../../utils/productManager');
 
  return {
    ...productTemplate,
    id: generateUniqueId(),
    ...overrides,
  };
}

// Ejemplo de cómo agregar un nuevo producto:
/*
import { createNewProduct } from './template';

const newProduct = createNewProduct({
  name: "Nuevo Producto",
  manufacturer: "Good Smile Company",
  price: 15000,
  originalPrice: 18000,
  category: "scale-figures",
  image: "https://ejemplo.com/imagen.jpg",
  description: "Descripción del nuevo producto...",
  // ... otros campos
});

// Luego agregar newProduct al array correspondiente en el archivo de la categoría
*/
