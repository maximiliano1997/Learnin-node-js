// 1. **Lectura y Escritura de Archivos:**
//- Crea un programa que lea un archivo de texto, realice alguna manipulación simple en el contenido y luego escriba el resultado en otro archivo.

const fs = require('fs')

let reads = ''

fs.readFile('archivo1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return;
    }

    fs.writeFile('archivo1.txt', `${data} programacion, Full Stack y Data Analytics`, (err) => {
        if (err) {
            console.error(err)
            return;
        } else {
            console.log('Archivo creado con exito.')
        }
    })
})



