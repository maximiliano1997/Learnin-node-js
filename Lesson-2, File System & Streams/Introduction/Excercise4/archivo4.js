const fs = require('fs')
const { Readable } = require('stream')

// ruta al archivo que generaremos 
const filePath = 'new_big_archive.txt'

// Tamaño total de archivo en bytes
const fileSizeInBytes = 1024 * 1024 * 100;

//Creamos un stream de escritura
const writeStream = fs.createWriteStream(filePath)

function generateDataAndWrite() {

    // Genera datos aleatorios
    const data = Buffer.alloc(1024, 'a');

    // Escribe los datos en el stream
    const canContinueWriting = writeStream.write(data);

    // Si el stream no puede aceptar mas datos por el momento, espera al evento 'drain'
    if (!canContinueWriting) {
        writeStream.once('drain', generateDataAndWrite);
    }
}

// Evento 'finish' se dispara cuando se completa la escritura
writeStream.on('finish', () => {
    console.log('Escritura del archivo completa.')
})


// Comienza a generar datos y escribir en el archivo
generateDataAndWrite();


// Finalizal a escritura del Stream
writeStream.end();



// Este programa utiliza un stream de escritura (fs.createWriteStream) para escribir datos en un archivo (archivo_grande_generado.txt). La función generateDataAndWrite genera datos (en este caso, un buffer de 1024 bytes lleno de 'a') y los escribe en el stream. Si el stream no puede aceptar más datos por el momento (debido a limitaciones de memoria), espera al evento 'drain' antes de continuar escribiendo.

//Puedes ajustar el tamaño del archivo(fileSizeInBytes) y la cantidad de datos generados según tus necesidades.Este es solo un ejemplo básico para mostrarte cómo puedes utilizar streams para escribir eficientemente en un archivo grande.