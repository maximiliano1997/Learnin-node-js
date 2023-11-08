const fs = require('fs')
const path = require('path')

function crearCarpeta(nombreCarpeta) {
    if (!fs.existsSync(nombreCarpeta)) {
        fs.mkdirSync(nombreCarpeta)
        console.log(`Carpeta ${nombreCarpeta} creada con exito !`)
    } else {
        console.log(`La Carpeta ${nombreCarpeta} ya existe.`)
    }
}

function moverArchivo(origen, destino) {
    fs.rename(origen, destino, (error) => {
        if (error) {
            console.error(`Error al mover el archivo: ${error}`)
        } else {
            console.log(`Archivo movido de "${origen}" a "${destino}".`)
        }
    })
}

function copiarArchivo(origen, destino) {
    fs.copyFile(origen, destino, (error) => {
        if (error) {
            console.error(`Error al copiar el archivo: ${error}`)
        } else {
            console.log(`Archivo copiado de "${origen}" a "${destino}".`)
        }
    })
}

function eliminarArchivo(rutaArchivo) {
    fs.unlink(rutaArchivo, (error) => {
        if (error) {
            console.error(`Error al eliminar el archivo: ${error}`)
        } else {
            console.log(`Archivo "${rutaArchivo}" elimnado con exito.`)
        }
    })
}

function eliminarCarpeta(nombreCarpeta) {
    fs.rmdir(nombreCarpeta, { recursive: true }, (error) => {
        if (error) {
            console.error(`Error al eliminar la capeta: ${error}`)
        } else {
            console.log(`Carpeta "${nombreCarpeta}" elimnada con exito`)
        }
    })
}

module.exports = {
    crearCarpeta,
    moverArchivo,
    copiarArchivo,
    eliminarArchivo,
    eliminarCarpeta
}
