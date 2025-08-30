# Script para actualizar rutas en el código con los nuevos nombres
Write-Host "Actualizando rutas en el código..."

# Mapeo de rutas antiguas a nuevas
$routeMapping = @{
    "/YotsubaActionFigureYotsubaKoiwai/YotsubaActionFigureYotsubaKoiwai1.jpg" = "/yotsuba/yotsuba-1.jpg"
    "/YotsubaActionFigureYotsubaKoiwai/YotsubaActionFigureYotsubaKoiwai2.jpg" = "/yotsuba/yotsuba-2.jpg"
    "/YotsubaActionFigureYotsubaKoiwai/YotsubaActionFigureYotsubaKoiwai3.jpg" = "/yotsuba/yotsuba-3.jpg"
    
    "/GGGSeriesMobileSuitZetaGundamHamanKarn/GGGSeriesMobileSuitZetaGundamHamanKarn1.jpg" = "/gundam-haman/gundam-haman-1.jpg"
    "/GGGSeriesMobileSuitZetaGundamHamanKarn/GGGSeriesMobileSuitZetaGundamHamanKarn2.jpg" = "/gundam-haman/gundam-haman-2.jpg"
    "/GGGSeriesMobileSuitZetaGundamHamanKarn/GGGSeriesMobileSuitZetaGundamHamanKarn3.jpg" = "/gundam-haman/gundam-haman-3.jpg"
    
    "/Nendoroidpetite/Nendoroidpetite1.jpg" = "/nendoroid-petite/nendoroid-petite-1.jpg"
    "/Nendoroidpetite/Nendoroidpetite2.jpg" = "/nendoroid-petite/nendoroid-petite-2.jpg"
    "/Nendoroidpetite/Nendoroidpetite3.jpg" = "/nendoroid-petite/nendoroid-petite-3.jpg"
    
    "/GRANBLUEFANTASYCharlotta/GRANBLUEFANTASYCharlotta1.jpg" = "/granblue-charlotta/granblue-charlotta-1.jpg"
    "/GRANBLUEFANTASYCharlotta/GRANBLUEFANTASYCharlotta2.jpg" = "/granblue-charlotta/granblue-charlotta-2.jpg"
    "/GRANBLUEFANTASYCharlotta/GRANBLUEFANTASYCharlotta3.jpg" = "/granblue-charlotta/granblue-charlotta-3.jpg"
    "/GRANBLUEFANTASYCharlotta/GRANBLUEFANTASYCharlotta4.jpg" = "/granblue-charlotta/granblue-charlotta-4.jpg"
    
    "/OdinSphereGwendolyn/OdinSphereGwendolyn1.jpg" = "/odin-gwendolyn/odin-gwendolyn-1.jpg"
    "/OdinSphereMercedes/OdinSphereMercedes1.jpg" = "/odin-mercedes/odin-mercedes-1.jpg"
    "/OdinSphereVelvetwithCornelius/OdinSphereVelvetwithCornelius1.jpg" = "/odin-velvet/odin-velvet-1.jpg"
    
    "/GGGSeriesMobileSuitGundam0083AnavelGato/GGGSeriesMobileSuitGundam0083AnavelGato1.jpg" = "/gundam-anavel/gundam-anavel-1.jpg"
    "/MobileSuitGundamRambaRal/MobileSuitGundamRambaRal1.jpg" = "/gundam-ramba/gundam-ramba-1.jpg"
    "/Yamato2199JuzoOkita/Yamato2199JuzoOkita1.jpg" = "/yamato-okita/yamato-okita-1.jpg"
    "/1100MGMSGoufCustom/1100MGMSGoufCustom1.jpg" = "/gouf-custom/gouf-custom-1.jpg"
    "/1100MGQubeley/1100MGQubeley1.jpg" = "/qubeley/qubeley-1.jpg"
    "/CinderellaGirlsAnastasia/CinderellaGirlsAnastasia1.jpg" = "/cinderella-anastasia/cinderella-anastasia-1.jpg"
    "/CinderellaGirlsNittaMinami/CinderellaGirlsNittaMinami1.jpg" = "/cinderella-minami/cinderella-minami-1.jpg"
    "/CinderellaGirlsKanzakiRanko/CinderellaGirlsKanzakiRanko1.jpg" = "/cinderella-ranko/cinderella-ranko-1.jpg"
    "/GRANBLUEFANTASYDanua/GRANBLUEFANTASYDanua1.jpg" = "/granblue-danua/granblue-danua-1.jpg"
    "/GUILTYGEARElpheltValentine/GUILTYGEARElpheltValentine1.jpg" = "/guilty-elphelt/guilty-elphelt-1.jpg"
    "/ShinraBanshoChocoMasenkiAsmodies/ShinraBanshoChocoMasenkiAsmodies1.jpg" = "/shinra-asmodies/shinra-asmodies-1.jpg"
    "/ShinraBanshoChocoMashougunAstaroth/ShinraBanshoChocoMashougunAstaroth1.jpg" = "/shinra-astaroth/shinra-astaroth-1.jpg"
    "/CinderellaGirlsSachikoKoshimizu/CinderellaGirlsSachikoKoshimizu1.jpg" = "/cinderella-sachiko/cinderella-sachiko-1.jpg"
    "/NendoroidSnowMikuMagicalSnow2014/NendoroidSnowMikuMagicalSnow1.jpg" = "/nendoroid-snow-miku/nendoroid-snow-miku-1.jpg"
    "/figmaGolgo/figmaGolgo1.jpg" = "/figma-golgo/figma-golgo-1.jpg"
    "/TriggerheartExelicaExelica/TriggerheartExelicaExelica1.jpg" = "/triggerheart-exelica/triggerheart-exelica-1.jpg"
    "/OrchidSeedSevenDeadlySinsLeviathan/OrchidSeedSevenDeadlySinsLeviathan1.jpg" = "/orchid-leviathan/orchid-leviathan-1.jpg"
    "/NendoroidHatsuneMikuHalloween/NendoroidHatsuneMikuHalloween1.jpg" = "/nendoroid-halloween-miku/nendoroid-halloween-miku-1.jpg"
    "/HatsuneMikuTellYourWorld/HatsuneMikuTellYourWorld1.jpg" = "/miku-tell-world/miku-tell-world-1.jpg"
    "/GrimoireofZeroZero/GrimoireofZeroZero1.jpg" = "/grimoire-zero/grimoire-zero-1.jpg"
    "/THEiDOLMASTERCinderellaGirlsTadaRiina/THEiDOLMASTERCinderellaGirlsTadaRiina1.jpg" = "/idolmaster-riina/idolmaster-riina-1.jpg"
    "/NendoroidHatsuneMikuSailorUniform/NendoroidHatsuneMikuSailorUniform1.jpg" = "/nendoroid-sailor-miku/nendoroid-sailor-miku-1.jpg"
    "/NendoroidUTAUTetoKasane/NendoroidUTAUTetoKasane1.jpg" = "/nendoroid-teto/nendoroid-teto-1.jpg"
}

# Archivos a actualizar
$filesToUpdate = @(
    "src/utils/images.ts",
    "src/components/CartModal.astro",
    "src/data/products/figures.ts",
    "src/data/products/nendoroids.ts"
)

foreach ($file in $filesToUpdate) {
    if (Test-Path $file) {
        Write-Host "Actualizando: $file"
        $content = Get-Content $file -Raw
        
        foreach ($oldRoute in $routeMapping.Keys) {
            $newRoute = $routeMapping[$oldRoute]
            $content = $content -replace [regex]::Escape($oldRoute), $newRoute
        }
        
        Set-Content $file $content -Encoding UTF8
    }
}

Write-Host "Rutas actualizadas completado!"
