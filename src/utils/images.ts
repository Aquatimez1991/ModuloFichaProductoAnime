// Importaciones de imágenes desde src/assets
export const images = {
  // Placeholder
  placeholder: '/placeholder-figure.svg',
  
  // Figuras principales
  yotsuba: '/YotsubaActionFigureYotsubaKoiwai/YotsubaActionFigureYotsubaKoiwai1.jpg',
  gundamHaman: '/GGGSeriesMobileSuitZetaGundamHamanKarn/GGGSeriesMobileSuitZetaGundamHamanKarn1.jpg',
  nendoroidPetite: '/Nendoroidpetite/Nendoroidpetite1.jpg',
  charlotta: '/GRANBLUEFANTASYCharlotta/GRANBLUEFANTASYCharlotta1.jpg',
  gwendolyn: '/OdinSphereGwendolyn/OdinSphereGwendolyn1.jpg',
  mercedes: '/OdinSphereMercedes/OdinSphereMercedes1.jpg',
  velvet: '/OdinSphereVelvetwithCornelius/OdinSphereVelvetwithCornelius1.jpg',
  anavelGato: '/GGGSeriesMobileSuitGundam0083AnavelGato/GGGSeriesMobileSuitGundam0083AnavelGato1.jpg',
  rambaRal: '/MobileSuitGundamRambaRal/MobileSuitGundamRambaRal1.jpg',
  juzoOkita: '/Yamato2199JuzoOkita/Yamato2199JuzoOkita1.jpg',
  goufCustom: '/1100MGMSGoufCustom/1100MGMSGoufCustom1.jpg',
  qubeley: '/1100MGQubeley/1100MGQubeley1.jpg',
  anastasia: '/CinderellaGirlsAnastasia/CinderellaGirlsAnastasia1.jpg',
  nittaMinami: '/CinderellaGirlsNittaMinami/CinderellaGirlsNittaMinami1.jpg',
  kanzakiRanko: '/CinderellaGirlsKanzakiRanko/CinderellaGirlsKanzakiRanko1.jpg',
  danua: '/GRANBLUEFANTASYDanua/GRANBLUEFANTASYDanua1.jpg',
  elphelt: '/GUILTYGEARElpheltValentine/GUILTYGEARElpheltValentine1.jpg',
  asmodies: '/ShinraBanshoChocoMasenkiAsmodies/ShinraBanshoChocoMasenkiAsmodies1.jpg',
  astaroth: '/ShinraBanshoChocoMashougunAstaroth/ShinraBanshoChocoMashougunAstaroth1.jpg',
  sachiko: '/CinderellaGirlsSachikoKoshimizu/CinderellaGirlsSachikoKoshimizu1.jpg',
  snowMiku: '/NendoroidSnowMikuMagicalSnow2014/NendoroidSnowMikuMagicalSnow1.jpg',
  golgo: '/figmaGolgo/figmaGolgo1.jpg',
  exelica: '/TriggerheartExelicaExelica/TriggerheartExelicaExelica1.jpg',
  leviathan: '/OrchidSeedSevenDeadlySinsLeviathan/OrchidSeedSevenDeadlySinsLeviathan1.jpg',
  halloweenMiku: '/NendoroidHatsuneMikuHalloween/NendoroidHatsuneMikuHalloween1.jpg',
  tellYourWorld: '/HatsuneMikuTellYourWorld/HatsuneMikuTellYourWorld1.jpg',
  grimoire: '/GrimoireofZeroZero/GrimoireofZeroZero1.jpg',
  tadaRiina: '/THEiDOLMASTERCinderellaGirlsTadaRiina/THEiDOLMASTERCinderellaGirlsTadaRiina1.jpg',
  sailorMiku: '/NendoroidHatsuneMikuSailorUniform/NendoroidHatsuneMikuSailorUniform1.jpg',
  tetoKasane: '/NendoroidUTAUTetoKasane/NendoroidUTAUTetoKasane1.jpg',
};

// Función helper para obtener imagen
export function getImage(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}
