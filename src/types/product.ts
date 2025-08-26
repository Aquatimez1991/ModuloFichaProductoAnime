// Tipos para productos
export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  status: ProductStatus;
  category: ProductCategory;
  scale: string;
  height: string;
  material: string;
  image: string;
  isNew: boolean;
  isPopular: boolean;
  stock: number;
  description: string;
  features: string[];
  images: string[];
  releaseDate: string;
}

export type ProductStatus = 'Disponible' | 'Preventa' | 'Agotado';
export type ProductCategory = 'scale-figures' | 'nendoroid' | 'figma' | 'pop-up-parade';

// Props para componentes de producto
export interface ProductCardProps {
  product: Product;
  showBadges?: boolean;
  showRating?: boolean;
}

export interface ProductGridProps {
  products: Product[];
  columns?: number;
  showFilters?: boolean;
}
