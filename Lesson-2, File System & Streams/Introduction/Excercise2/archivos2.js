// 2. ** Operaciones Asíncronas:**
// - Modifica el ejercicio anterior para utilizar las versiones asíncronas de las operaciones de lectura y escritura de archivos.

const fs = require('fs').promises

async function readFileAndWrite() {
    try {
        const data = await fs.readFile('archivo2.txt', 'utf8')
        await fs.writeFile('archivo2.txt', `${data} programacion Full Stack y Data Analytics`)
        console.log('Archivo creado con exito.')
    } catch (err) {
        console.error('Ha surgido un error inespeado. ', err)

    }
}

readFileAndWrite()