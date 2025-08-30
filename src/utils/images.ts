// Importaciones de imÃ¡genes desde public/
export const images = {
  // Placeholder
  placeholder: '/placeholder-figure.svg',
  
  // Figuras principales
  yotsuba: '/yotsuba/yotsuba-1.jpg',
  gundamHaman: '/gundam-haman/gundam-haman-1.jpg',
  nendoroidPetite: '/nendoroid-petite/nendoroid-petite-1.jpg',
  charlotta: '/granblue-charlotta/granblue-charlotta-1.jpg',
  gwendolyn: '/odin-gwendolyn/odin-gwendolyn-1.jpg',
  mercedes: '/odin-mercedes/odin-mercedes-1.jpg',
  velvet: '/odin-velvet/odin-velvet-1.jpg',
  anavelGato: '/gundam-anavel/gundam-anavel-1.jpg',
  rambaRal: '/gundam-ramba/gundam-ramba-1.jpg',
  juzoOkita: '/yamato-okita/yamato-okita-1.jpg',
  goufCustom: '/gouf-custom/gouf-custom-1.jpg',
  qubeley: '/qubeley/qubeley-1.jpg',
  anastasia: '/cinderella-anastasia/cinderella-anastasia-1.jpg',
  nittaMinami: '/cinderella-minami/cinderella-minami-1.jpg',
  kanzakiRanko: '/cinderella-ranko/cinderella-ranko-1.jpg',
  danua: '/granblue-danua/granblue-danua-1.jpg',
  elphelt: '/guilty-elphelt/guilty-elphelt-1.jpg',
  asmodies: '/shinra-asmodies/shinra-asmodies-1.jpg',
  astaroth: '/shinra-astaroth/shinra-astaroth-1.jpg',
  sachiko: '/cinderella-sachiko/cinderella-sachiko-1.jpg',
  snowMiku: '/nendoroid-snow-miku/nendoroid-snow-miku-1.jpg',
  golgo: '/figma-golgo/figma-golgo-1.jpg',
  exelica: '/triggerheart-exelica/triggerheart-exelica-1.jpg',
  leviathan: '/orchid-leviathan/orchid-leviathan-1.jpg',
  halloweenMiku: '/nendoroid-halloween-miku/nendoroid-halloween-miku-1.jpg',
  tellYourWorld: '/miku-tell-world/miku-tell-world-1.jpg',
  grimoire: '/grimoire-zero/grimoire-zero-1.jpg',
  tadaRiina: '/idolmaster-riina/idolmaster-riina-1.jpg',
  sailorMiku: '/nendoroid-sailor-miku/nendoroid-sailor-miku-1.jpg',
  tetoKasane: '/nendoroid-teto/nendoroid-teto-1.jpg',
};

// FunciÃ³n helper para obtener imagen
export function getImage(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

