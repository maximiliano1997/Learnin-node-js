param (
    [int]$choice  # Definir el argumento como un número entero
)

# Enumerar carpetas y crear una lista numerada
$folders = Get-ChildItem -Directory
for ($i = 0; $i -lt $folders.Length; $i++) {
    Write-Output "$($i+1). $($folders[$i].Name)"
}

# Si no se proporciona un argumento, solicitar al usuario el número de carpeta a cambiar
if (-not $choice) {
    $choice = Read-Host "Ingresa el número de la carpeta para entrar"
}

# Validar la entrada y cambiar al directorio correspondiente
if ($choice -match '^\d+$' -and $choice -ge 1 -and $choice -le $folders.Length) {
    Set-Location $folders[$choice - 1].FullName
} else {
    Write-Output "Opción no válida. Por favor, inténtalo de nuevo."
}
