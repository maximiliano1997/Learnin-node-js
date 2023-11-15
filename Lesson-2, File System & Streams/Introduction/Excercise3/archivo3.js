/*
3. **Lectura Eficiente con Streams:**
   - Utiliza streams para leer un archivo grande línea por línea y realiza alguna acción con cada línea leída.
*/

const fs = require('fs')
const readline = require('readline')

// Ruta al archivo
const filePath = 'big_archive.txt'

// Crear un stream de lectura
const readStream = fs.createReadStream(filePath, 'utf8')

// Crear una interfaz de lectura de lineas
const rl = readline.createInterface({
   input: readStream,
   crlfDelay: Infinity
})

// Funcion que se ejecuta con cada linea leida
rl.on('line', (line) => {
   console.log(line)
})

// Maneja el evento 'close' cuando la lectura del archivo se completa
rl.on('close', () => {
   console.log('Lectura del archivo completa')
})




// Este código utiliza fs.createReadStream para crear un stream de lectura del archivo y readline.createInterface para crear una interfaz de lectura de líneas. La función definida en el evento 'line' se ejecutará para cada línea leída del archivo. Puedes personalizar la acción dentro de esa función según tus necesidades. En este ejemplo, simplemente imprimimos cada línea en la consola.