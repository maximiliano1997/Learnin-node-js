// 2. ** Procesador de Datos CSV:**
// - Crea un programa que lea un archivo CSV utilizando streams, realice alguna manipulación en los datos y escriba el resultado en otro archivo CSV.

const fs = require('fs')
const csv = require('csv-parser')
const fastCsv = require('fast-csv')

// Rutas de lso archivos de entrada y salida
const inputFile = 'input.csv'
const outputFile = 'output.csv'

// Crea un stream de lectura desde el archivo de entrada
const readStream = fs.createReadStream(inputFile, 'utf8')

// Crea un stream de escritura hacia el archivo de salida
const writeStream = fs.createWriteStream(outputFile)

// Utiliza csv-parser para leer el CSV y fast-csv para escribir el nuevo CSV
const csvRows = []

readStream
    .pipe(csv()) // Usa csv-parse para parsear el CSV
    .on('data', (row) => {
        // Realiza manipulaciones en los datos si es necesario
        csvRows.push({
            nombre: row.nombre.toUpperCase(),
            apellido: row.apellido,
            edad: row.edad,
            ciudad: row.ciudad,
        })
    })
    .on('end', () => {
        // // Una vez que se han procesado todos los datos, utiliza fast-csv para escribir el nuevo CSV
        // const csvStream = fastCsv.write().transform((row) => [row.nombre, row.apellido, row.edad, row.ciudad])
        // csvStream.pipe(writeStream)

        // Ahora, utilizamos forEachSeries en lugar de reduce para escribir las filas de manera asincronica
        fastCsv.writeToStream(writeStream, csvRows, { headers: true })
            .on('finish', () => {
                console.log('Proceso completado. Resultados escritos en ', outputFile)
            })
    })

// Este ejemplo utiliza 'csv-parser' para leer el archivo CSV y 'fast-csv' para escribir el nuevo CSV. Puedes ajustar las manipulaciones en los datos según tus necesidades específicas. Asegúrate de tener un archivo de entrada (input.csv) con datos para que este ejemplo funcione correctamente.

