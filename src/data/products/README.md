# Guía para Agregar Nuevos Productos

Esta carpeta contiene todos los productos organizados por categorías para facilitar la gestión y escalabilidad del proyecto.

## Estructura de Archivos

```
src/data/
├── products.ts              # Archivo centralizado (exporta todos los productos)
└── products/
    ├── figures.ts           # Figuras a escala (1/7, 1/4, etc.)
    ├── nendoroids.ts        # Nendoroids
    ├── figma.ts             # Figma articulados
    ├── pop-up-parade.ts     # Pop Up Parade
    ├── template.ts          # Plantilla para nuevos productos
    └── README.md            # Esta guía
```

## Cómo Agregar un Nuevo Producto

### 1. Usar la Plantilla (Recomendado)

```typescript
import { createNewProduct } from './template';

const nuevoProducto = createNewProduct({
  name: 'Nombre del Producto',
  manufacturer: 'Fabricante',
  price: 15000,
  originalPrice: 18000,
  category: 'scale-figures', // o "nendoroid", "figma", "pop-up-parade"
  image: 'https://ejemplo.com/imagen.jpg',
  description: 'Descripción del producto...',
  // ... otros campos
});
```

### 2. Agregar Manualmente

1. **Elegir el archivo correcto** según la categoría:
   - `figures.ts` para figuras a escala
   - `nendoroids.ts` para Nendoroids
   - `figma.ts` para Figma
   - `pop-up-parade.ts` para Pop Up Parade

2. **Agregar el producto al array** correspondiente:

```typescript
export const allFigures: Product[] = [
  // ... productos existentes
  {
    id: 999, // Usar generateUniqueId() para IDs únicos
    name: 'Nuevo Producto',
    manufacturer: 'Fabricante',
    price: 15000,
    originalPrice: 18000,
    rating: 4.5,
    reviews: 0,
    status: 'Disponible',
    category: 'scale-figures',
    scale: '1/7',
    height: '22cm',
    material: 'PVC & ABS',
    image: 'URL_IMAGEN_PRINCIPAL',
    isNew: true,
    isPopular: false,
    stock: 10,
    description: 'Descripción detallada...',
    features: ['Característica 1', 'Característica 2'],
    images: ['URL_IMAGEN_1', 'URL_IMAGEN_2'],
    releaseDate: '2024-12-01',
  },
];
```

## Campos Requeridos

- `id`: Identificador único (usar `generateUniqueId()`)
- `name`: Nombre del producto
- `manufacturer`: Fabricante
- `price`: Precio actual
- `originalPrice`: Precio original (para descuentos)
- `category`: Categoría del producto
- `image`: URL de la imagen principal
- `description`: Descripción del producto
- `stock`: Cantidad en stock

## Categorías Disponibles

- `scale-figures`: Figuras a escala (1/7, 1/4, etc.)
- `nendoroid`: Nendoroids
- `figma`: Figma articulados
- `pop-up-parade`: Pop Up Parade

## Funciones Útiles

### Obtener Productos

```typescript
import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
  getFeaturedProducts,
  getNewProducts,
  searchProducts,
} from '../../utils/productManager';

// Todos los productos
const todos = getAllProducts();

// Por categoría
const figuras = getProductsByCategory('scale-figures');

// Por ID
const producto = getProductById(1);

// Destacados
const destacados = getFeaturedProducts(6);

// Nuevos
const nuevos = getNewProducts(4);

// Búsqueda
const resultados = searchProducts('miku');
```

### Validación

```typescript
import { validateProduct } from '../../utils/productManager';

const producto = {
  /* ... */
};
const validacion = validateProduct(producto);

if (!validacion.isValid) {
  console.log('Errores:', validacion.errors);
}
```

## Convenciones de Nomenclatura

- **IDs**: Usar rangos por categoría
  - Figuras: 1-99
  - Nendoroids: 101-199
  - Figma: 201-299
  - Pop Up Parade: 301-399

- **Imágenes**:
  - Imagen principal en `image`
  - Galería de imágenes en `images[]`
  - Usar URLs HTTPS

- **Precios**:
  - En centavos o la unidad más pequeña
  - `price` = precio actual
  - `originalPrice` = precio original (para descuentos)

## Ejemplo Completo

```typescript
import { createNewProduct } from './template';

const nuevaFigura = createNewProduct({
  name: 'Asuka Langley - Evangelion 2.0',
  manufacturer: 'Kotobukiya',
  price: 13500,
  originalPrice: 15000,
  rating: 4.8,
  reviews: 45,
  status: 'Disponible',
  category: 'scale-figures',
  scale: '1/7',
  height: '24cm',
  material: 'PVC & ABS',
  image: 'https://ejemplo.com/asuka-principal.jpg',
  isNew: true,
  isPopular: true,
  stock: 15,
  description:
    'Nueva versión de Asuka Langley con mejoras en detalles y pintura...',
  features: [
    'Pintura mejorada',
    'Base temática nueva',
    'Detalles metálicos',
    'Partes intercambiables',
  ],
  images: [
    'https://ejemplo.com/asuka-1.jpg',
    'https://ejemplo.com/asuka-2.jpg',
    'https://ejemplo.com/asuka-3.jpg',
  ],
  releaseDate: '2024-12-15',
});

// Agregar al array en figures.ts
export const allFigures: Product[] = [
  // ... productos existentes
  nuevaFigura,
];
```

## Notas Importantes

1. **Siempre usar `generateUniqueId()`** para IDs únicos
2. **Validar el producto** antes de agregarlo
3. **Mantener consistencia** en el formato de datos
4. **Usar URLs HTTPS** para las imágenes
5. **Actualizar la documentación** si se agregan nuevos campos

## Estructura Simplificada

- **Archivo centralizado**: `src/data/products.ts` exporta todos los productos
- **Organización por categorías**: Cada tipo de producto en su propio archivo
- **Importación simple**: Solo importar desde `../data/products`
- **Sin duplicación**: Eliminamos archivos redundantes
