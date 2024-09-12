@echo off
setlocal enabledelayedexpansion

REM Enumerar carpetas y crear una lista numerada
set count=0
for /d %%d in (*) do (
    set /a count+=1
    echo !count!. %%d
    set "dir_!count!=%%d"
)

REM Solicitar al usuario el número de carpeta a cambiar
set /p choice="Ingresa el número de la carpeta para entrar: "

REM Comprobar si la opción ingresada es válida
if defined dir_%choice% (
    cd "!dir_%choice%!"
) else (
    echo Opción no válida. Por favor, inténtalo de nuevo.
)
    