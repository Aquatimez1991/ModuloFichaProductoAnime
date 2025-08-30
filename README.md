# 🐰 RabbitVault - Tienda de Figuras Anime

Tienda especializada en figuras anime auténticas importadas directamente desde Japón. Desarrollada con **Astro**, **TypeScript** y **Tailwind CSS**.

## ✨ Características

- 🛍️ **Catálogo completo** de figuras anime
- 🔍 **Búsqueda y filtros** avanzados por categoría
- 🛒 **Carrito de compras** funcional
- 📱 **Diseño responsive** optimizado
- ⚡ **Rendimiento optimizado** con Astro
- 🎨 **UI moderna** con Tailwind CSS
- 🔒 **TypeScript** para mayor seguridad

## 🚀 Tecnologías

- **Framework**: [Astro](https://astro.build/) 3.6.0
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.3.0
- **Utilidades**: clsx, tailwind-merge
- **Linting**: ESLint + Prettier

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd rabbitvault-anime-store

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción

# Calidad de código
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Corregir errores de ESLint
npm run format       # Formatear código con Prettier
npm run type-check   # Verificar tipos de TypeScript

# Utilidades
npm run clean        # Limpiar archivos de build
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── features/       # Componentes específicos de funcionalidad
│   │   └── product/    # Componentes relacionados con productos
│   └── ui/            # Componentes de UI base
├── data/              # Datos y constantes
│   └── products/      # Datos de productos por categoría
├── layouts/           # Layouts de página
├── pages/             # Páginas de la aplicación
│   └── figura/        # Páginas de detalle de producto
├── types/             # Definiciones de tipos TypeScript
├── utils/             # Utilidades y helpers
└── styles/            # Estilos globales
```

## 🎯 Funcionalidades Principales

### 🛍️ Gestión de Productos

- Catálogo completo con 28+ figuras
- Categorización por tipo (Scale Figures, Nendoroid, Figma, etc.)
- Filtros por categoría, precio y disponibilidad
- Búsqueda por nombre y fabricante

### 🛒 Carrito de Compras

- Agregar/eliminar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia en localStorage

### 🎨 UI/UX

- Diseño responsive para todos los dispositivos
- Carrusel automático en homepage
- Modales interactivos
- Notificaciones en tiempo real
- Iconografía personalizada (RabbitVault)

## 📊 Categorías de Productos

- **Scale Figures**: Figuras detalladas en escalas 1/7, 1/8
- **Nendoroid**: Figuras articuladas de Good Smile Company
- **Figma**: Figuras articuladas de Max Factory
- **Pop Up Parade**: Figuras económicas de Good Smile Company
- **Model Kits**: Kits de montaje de Bandai

## 🔧 Configuración

### Variables de Entorno

```env
# Configuración de la aplicación
APP_NAME=RabbitVault
APP_URL=https://rabbitvault.com
CONTACT_EMAIL=ventas@rabbitvault.com
```

### Configuración de Tailwind

El proyecto utiliza una configuración personalizada de Tailwind CSS con:

- Sistema de colores personalizado
- Variables CSS para temas
- Configuración de breakpoints optimizada

## 🚀 Despliegue

### Build de Producción

```bash
npm run build
```

### Servidor de Vista Previa

```bash
npm run preview
```

## 📝 Convenciones de Código

### TypeScript

- Uso estricto de tipos
- Interfaces bien definidas
- Validación de datos
- Path mapping configurado

### Componentes

- Nomenclatura PascalCase
- Props tipadas
- Documentación JSDoc
- Separación de responsabilidades

### Estilos

- Tailwind CSS como framework principal
- Variables CSS para temas
- Componentes reutilizables
- Diseño mobile-first

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: ventas@rabbitvault.com
- **WhatsApp**: +51 949 799 869
- **Sitio Web**: https://rabbitvault.com

---

Desarrollado con ❤️ por el equipo de **RabbitVault**
