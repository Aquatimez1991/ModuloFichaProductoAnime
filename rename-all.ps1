# Script completo para renombrar carpetas e imágenes a formato estándar
Write-Host "Renombrando carpetas e imágenes..."

# Mapeo de nombres antiguos a nuevos (más simples)
$folderMapping = @{
    "YotsubaActionFigureYotsubaKoiwai" = "yotsuba"
    "GGGSeriesMobileSuitZetaGundamHamanKarn" = "gundam-haman"
    "Nendoroidpetite" = "nendoroid-petite"
    "GRANBLUEFANTASYCharlotta" = "granblue-charlotta"
    "OdinSphereGwendolyn" = "odin-gwendolyn"
    "OdinSphereMercedes" = "odin-mercedes"
    "OdinSphereVelvetwithCornelius" = "odin-velvet"
    "GGGSeriesMobileSuitGundam0083AnavelGato" = "gundam-anavel"
    "MobileSuitGundamRambaRal" = "gundam-ramba"
    "Yamato2199JuzoOkita" = "yamato-okita"
    "1100MGMSGoufCustom" = "gouf-custom"
    "1100MGQubeley" = "qubeley"
    "CinderellaGirlsAnastasia" = "cinderella-anastasia"
    "CinderellaGirlsNittaMinami" = "cinderella-minami"
    "CinderellaGirlsKanzakiRanko" = "cinderella-ranko"
    "GRANBLUEFANTASYDanua" = "granblue-danua"
    "GUILTYGEARElpheltValentine" = "guilty-elphelt"
    "ShinraBanshoChocoMasenkiAsmodies" = "shinra-asmodies"
    "ShinraBanshoChocoMashougunAstaroth" = "shinra-astaroth"
    "CinderellaGirlsSachikoKoshimizu" = "cinderella-sachiko"
    "NendoroidSnowMikuMagicalSnow2014" = "nendoroid-snow-miku"
    "figmaGolgo" = "figma-golgo"
    "TriggerheartExelicaExelica" = "triggerheart-exelica"
    "OrchidSeedSevenDeadlySinsLeviathan" = "orchid-leviathan"
    "NendoroidHatsuneMikuHalloween" = "nendoroid-halloween-miku"
    "HatsuneMikuTellYourWorld" = "miku-tell-world"
    "GrimoireofZeroZero" = "grimoire-zero"
    "THEiDOLMASTERCinderellaGirlsTadaRiina" = "idolmaster-riina"
    "NendoroidHatsuneMikuSailorUniform" = "nendoroid-sailor-miku"
    "NendoroidUTAUTetoKasane" = "nendoroid-teto"
}

# Renombrar carpetas
$publicPath = "public"
foreach ($oldName in $folderMapping.Keys) {
    $newName = $folderMapping[$oldName]
    $oldPath = Join-Path $publicPath $oldName
    $newPath = Join-Path $publicPath $newName
    
    if (Test-Path $oldPath) {
        Write-Host "Renombrando carpeta: $oldName -> $newName"
        Rename-Item -Path $oldPath -NewName $newName
        
        # Renombrar imágenes dentro de la carpeta
        $imagePath = $newPath
        $images = Get-ChildItem -Path $imagePath -Filter "*.jpg"
        
        for ($i = 0; $i -lt $images.Count; $i++) {
            $oldImageName = $images[$i].Name
            $newImageName = "$newName-$($i + 1).jpg"
            $oldImagePath = Join-Path $imagePath $oldImageName
            $newImagePath = Join-Path $imagePath $newImageName
            
            Write-Host "  Renombrando imagen: $oldImageName -> $newImageName"
            Rename-Item -Path $oldImagePath -NewName $newImageName
        }
    }
}

Write-Host "Renombrado completado!"
