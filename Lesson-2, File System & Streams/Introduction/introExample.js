const fs = require('fs');

/* ////////  1. Sistema de Archivos en Node.js: //////// */

// a) LECTURA DE ARCHIVOS

// fs.readFile('Lesson.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Contenido del Archivo', data);
// })

// b) ESCRITURA DE ARCHIVOS

// fs.writeFile('nuevoArchivo.txt', 'Hola, este es un nuevo Archivo creado con writeFile desde introExample.js', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Archivo creado Exitosamente');
// })


// c) OPERACIONES ASINCRONAS Y SINCRONAS
// Las funciones como readFile y writeFile son asincronas. Node.js tambien proporciona versiones sincronas como 'readFileSync' y 'writeFileSync'. Sin embargo, se recomienda el uso de operaciones asincronas para no bloquear el hile principal.


/* ////////  1. Streams en Node.js: //////// */

// Los streams son una forma eficiente de manejar lecturas y escrituras de datos, especialmente cuando se trabaja con grandes conjuntos de datos. Hay varois tipos de streams, pero nos centraremos en 'Readable' y 'Writable'

// a) LECTURA CON STREAMS:

// const readableStream = fs.createReadStream('Lesson.txt', 'utf8');


// readableStream.on('data', (chunk) => {
//     console.log('Chunk leido', chunk);
// });

// readableStream.on('end', () => {
//     console.log('Lectura completa. ')
// });

// b) ESCRITURA CON STREAMS:

// const writableStream = fs.createWriteStream('nuevoArchivo.txt');

// let data = 'Hola, este es un nuevo archivo creado por introExample.js'

// for (let i = 0; i < 1000; i++) {
//     data += 'writableStream'
// }

// writableStream.write(data);

// writableStream.end();

// writableStream.on('finish', () => {
//     console.log('Escritura completa.');
// });



/* ////////  2. Pipelines en Node.js: //////// */

/* Node.js facilita la creacion de pipelines para simplificar las operaciones con streams. Un ejemplo comun es leer un archivo y escribir en otro */

const { pipeline } = require('stream');

const readableStream = fs.createReadStream('entrada.txt');
const writableStream = fs.createWriteStream('salida.txt');

pipeline(readableStream, writableStream, (err) => {
    if (err) {
        console.error('Pipeline fallo:', err);
    } else {
        console.log('Pipeline completo.');
    }
});





// En resumen, el manejo de archivos y streams en Node.js es crucial para construir aplicaciones eficientes y escalables. Asegúrate de comprender los conceptos básicos y practicar con ejemplos para fortalecer tu comprensión. ¡Buena suerte!