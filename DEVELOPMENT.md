# 🚀 Flujo de Desarrollo - RabbitVault

## 📋 Estructura de Ramas

### 🌿 **main** - Rama de Producción

- **Propósito:** Versión estable y lista para producción
- **Estado actual:** ✅ Versión 1.0.0 estable
- **Características:**
  - ✅ Deploy funcional en Vercel
  - ✅ Ortografía corregida
  - ✅ Categorías corregidas
  - ✅ Conteo de productos preciso
  - ✅ Estilos unificados

### 🔧 **develop** - Rama de Desarrollo

- **Propósito:** Rama principal para desarrollo de nuevas características
- **Estado actual:** 🔄 En desarrollo activo
- **Flujo de trabajo:**
  1. Crear ramas feature desde `develop`
  2. Desarrollar nuevas características
  3. Merge a `develop` cuando esté listo
  4. Testing en `develop`
  5. Merge a `main` cuando esté estable

## 🛠️ Comandos de Trabajo

### Cambiar entre ramas:

```bash
# Ir a rama de desarrollo
git checkout develop

# Ir a rama de producción
git checkout main

# Ver ramas disponibles
git branch -a
```

### Flujo de desarrollo típico:

```bash
# 1. Crear nueva rama feature desde develop
git checkout develop
git checkout -b feature/nueva-caracteristica

# 2. Desarrollar y hacer commits
git add .
git commit -m "✨ FEATURE: Nueva característica implementada"

# 3. Subir rama feature
git push -u origin feature/nueva-caracteristica

# 4. Merge a develop (después de review)
git checkout develop
git merge feature/nueva-caracteristica
git push origin develop

# 5. Cuando develop esté estable, merge a main
git checkout main
git merge develop
git push origin main
```

## 📦 Versiones

### **v1.0.0** - Versión Estable Actual (main)

- ✅ Deploy funcional en Vercel
- ✅ Corrección de ortografía y caracteres
- ✅ Categorización correcta de productos
- ✅ Conteo preciso de productos por categoría
- ✅ Filtros funcionales
- ✅ Carrito de compras
- ✅ Lista de favoritos
- ✅ Diseño responsive

### **v1.1.0** - Próximas Características (develop)

- 🔄 Nuevas características en desarrollo
- 🔄 Mejoras de UX/UI
- 🔄 Optimizaciones de rendimiento

## 🎯 Próximas Mejoras Planificadas

### **Funcionalidades:**

- [ ] Sistema de búsqueda avanzada
- [ ] Filtros por precio
- [ ] Sistema de reseñas
- [ ] Comparador de productos
- [ ] Notificaciones push
- [ ] Modo oscuro

### **Técnicas:**

- [ ] Optimización de imágenes
- [ ] Lazy loading
- [ ] PWA (Progressive Web App)
- [ ] SEO mejorado
- [ ] Analytics integrado

## 📝 Convenciones de Commits

```bash
# Tipos de commits:
✨ FEATURE: Nueva característica
🔧 FIX: Corrección de bug
📝 DOCS: Documentación
🎨 STYLE: Cambios de estilo
♻️ REFACTOR: Refactorización
⚡ PERFORMANCE: Mejoras de rendimiento
🧪 TEST: Tests
🔧 CONFIG: Configuración
```

## 🚀 Deploy

### **Producción (main):**

- **URL:** https://modulo-ficha-producto-anime.vercel.app
- **Trigger:** Push a `main`
- **Estado:** ✅ Funcional

### **Desarrollo (develop):**

- **URL:** (Configurar en Vercel si es necesario)
- **Trigger:** Push a `develop`
- **Estado:** 🔄 En desarrollo

---

**📞 Contacto:** RabbitVault Team  
**📅 Última actualización:** $(date)

