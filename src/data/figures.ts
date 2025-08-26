export interface Figure {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  status: string;
  category: string;
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

export const allFigures: Figure[] = [
  {
    id: 1,
    name: "Asuka Langley - Evangelion",
    manufacturer: "Kotobukiya",
    price: 12800,
    originalPrice: 14500,
    rating: 4.7,
    reviews: 89,
    status: "Disponible",
    category: "scale-figures",
    scale: "1/7",
    height: "22cm",
    material: "PVC & ABS",
    image: "https://images.unsplash.com/photo-1667585149954-5beab3e9bdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isPopular: true,
    stock: 15,
    description: "Una hermosa figura a escala 1/7 de Asuka Langley en su icónico traje de piloto de Evangelion. Fabricada por Kotobukiya con detalles excepcionales y acabados premium. Incluye base temática con efectos especiales.",
    features: [
      "Pintura de alta calidad",
      "Base temática incluida",
      "Detalles metálicos",
      "Partes intercambiables"
    ],
    images: [
      "https://images.unsplash.com/photo-1667585149954-5beab3e9bdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1601382270349-49c15bddf738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMHRveSUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMGNvbGxlY3RpYmxlfGVufDF8fHx8MTc1NjAzODgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    releaseDate: "2024-11-15"
  },
  {
    id: 2,
    name: "Miku Hatsune - Racing 2024",
    manufacturer: "Good Smile Company",
    price: 16500,
    originalPrice: 18900,
    rating: 4.9,
    reviews: 1247,
    status: "Preventa",
    category: "scale-figures",
    scale: "1/7",
    height: "25cm",
    material: "PVC y ABS de alta calidad",
    image: "https://images.unsplash.com/photo-1601382270349-49c15bddf738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMHRveSUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isPopular: true,
    stock: 8,
    description: "La figura más esperada del año. Miku Hatsune en su versión Racing 2024, con detalles excepcionales y pintura de alta calidad. Incluye base especial y certificado de autenticidad.",
    features: [
      "Escala 1/7 - Altura: 25cm",
      "Material: PVC y ABS de alta calidad",
      "Base especial con efectos LED",
      "Certificado de autenticidad incluido"
    ],
    images: [
      "https://images.unsplash.com/photo-1601382270349-49c15bddf738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMHRveSUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1667585149954-5beab3e9bdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMGNvbGxlY3RpYmxlfGVufDF8fHx8MTc1NjAzODgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    releaseDate: "2024-12-15"
  },
  {
    id: 3,
    name: "Nezuko Kamado - Demon Slayer",
    manufacturer: "Aniplex+",
    price: 14200,
    originalPrice: 16000,
    rating: 4.8,
    reviews: 156,
    status: "Disponible",
    category: "scale-figures",
    scale: "1/7",
    height: "20cm",
    material: "PVC & ABS",
    image: "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMGNvbGxlY3RpYmxlfGVufDF8fHx8MTc1NjAzODgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isPopular: true,
    stock: 23,
    description: "Nezuko Kamado en su forma demoníaca con detalles impresionantes. Esta figura captura perfectamente la esencia del personaje con su kimono tradicional y elementos demoníacos.",
    features: [
      "Detalles demoníacos",
      "Kimono tradicional",
      "Base temática",
      "Efectos especiales"
    ],
    images: [
      "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMGNvbGxlY3RpYmxlfGVufDF8fHx8MTc1NjAzODgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1667585149954-5beab3e9bdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1601382270349-49c15bddf738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMHRveSUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    releaseDate: "2024-10-20"
  },
  {
    id: 4,
    name: "Zero Two - Darling in the FranXX",
    manufacturer: "FREEing",
    price: 18900,
    originalPrice: 21000,
    rating: 4.6,
    reviews: 78,
    status: "Disponible",
    category: "scale-figures",
    scale: "1/4",
    height: "45cm",
    material: "PVC & ABS",
    image: "https://images.unsplash.com/photo-1678997887858-c383cc8d1791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMHN0YXR1ZXxlbnwxfHx8fDE3NTYwODU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isPopular: false,
    stock: 12,
    description: "Zero Two en escala 1/4 con detalles excepcionales. Esta figura de gran tamaño captura la belleza y carisma del personaje con una calidad de pintura superior.",
    features: [
      "Escala 1/4 premium",
      "Pintura superior",
      "Base especial",
      "Detalles faciales"
    ],
    images: [
      "https://images.unsplash.com/photo-1678997887858-c383cc8d1791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMHN0YXR1ZXxlbnwxfHx8fDE3NTYwODU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1667585149954-5beab3e9bdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMGNvbGxlY3RpYmxlfGVufDF8fHx8MTc1NjAzODgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    releaseDate: "2024-09-30"
  },
  {
    id: 5,
    name: "Violet Evergarden - Auto Memory Doll",
    manufacturer: "Alter",
    price: 21500,
    originalPrice: 24000,
    rating: 4.9,
    reviews: 203,
    status: "Preventa",
    category: "scale-figures",
    scale: "1/7",
    height: "24cm",
    material: "PVC & ABS",
    image: "https://images.unsplash.com/photo-1734383155973-7cc7b027129d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNvbGxlY3RpYmxlJTIwdG95fGVufDF8fHx8MTc1NjA4NTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isPopular: true,
    stock: 5,
    description: "Violet Evergarden en su elegante traje de Auto Memory Doll. Esta figura de Alter representa la belleza y elegancia del personaje con una calidad excepcional.",
    features: [
      "Calidad Alter premium",
      "Traje detallado",
      "Base elegante",
      "Edición limitada"
    ],
    images: [
      "https://images.unsplash.com/photo-1734383155973-7cc7b027129d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNvbGxlY3RpYmxlJTIwdG95fGVufDF8fHx8MTc1NjA4NTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1667585149954-5beab3e9bdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGZpZ3VyZXxlbnwxfHx8fDE3NTYwODU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZpZ3VyZSUyMGNvbGxlY3RpYmxlfGVufDF8fHx8MTc1NjAzODgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    releaseDate: "2024-12-20"
  }
];
