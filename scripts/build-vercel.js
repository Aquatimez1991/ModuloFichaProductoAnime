#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build para Vercel...');

// Verificar que tailwind.config.js existe
const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js');
if (!fs.existsSync(tailwindConfigPath)) {
  console.error('❌ tailwind.config.js no encontrado');
  process.exit(1);
}

console.log('✅ tailwind.config.js encontrado');

// Verificar que src/styles/global.css existe
const globalCssPath = path.join(process.cwd(), 'src', 'styles', 'global.css');
if (!fs.existsSync(globalCssPath)) {
  console.error('❌ src/styles/global.css no encontrado');
  process.exit(1);
}

console.log('✅ src/styles/global.css encontrado');

try {
  // Ejecutar build de Astro
  console.log('🔨 Ejecutando build de Astro...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Build completado exitosamente');
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}
