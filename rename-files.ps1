# Script para renombrar archivos y carpetas a formato estándar
# Eliminar caracteres especiales y usar solo minúsculas

Write-Host "Renombrando archivos y carpetas..."

# Función para limpiar nombres
function Clean-Name {
    param([string]$name)
    # Convertir a minúsculas y reemplazar espacios con guiones
    $clean = $name.ToLower() -replace '\s+', '-'
    # Remover caracteres especiales excepto guiones
    $clean = $clean -replace '[^a-z0-9\-]', ''
    return $clean
}

# Renombrar carpetas en public
$publicPath = "public"
$folders = Get-ChildItem -Path $publicPath -Directory

foreach ($folder in $folders) {
    $oldName = $folder.Name
    $newName = Clean-Name $oldName
    
    if ($oldName -ne $newName) {
        $oldPath = Join-Path $publicPath $oldName
        $newPath = Join-Path $publicPath $newName
        
        Write-Host "Renombrando: $oldName -> $newName"
        Rename-Item -Path $oldPath -NewName $newName
    }
}

Write-Host "Renombrado completado!"
