const fs = require('node:fs')

///////////////////////    1 - ONE
// CALLBACKS ---> Son funciones que se pasan como argumentos a otras funciones y se ejecutan despuse de que se complete una operacion asincrona

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})


///////////////////////    2 - TWO
// PROMISES ---> Son objetos que representan el resultado de una operacion asincronica que puede estar pendiente, resolverse o rechazarse.

const readFilePromise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data)
        });
    });
};

readFilePromise('archivo.txt')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));



///////////////////////    3 - THREE
// Async/Await ---> es una forma mas legible y concisa de trabajar con Primises. Se utiliza en funciones marcadas como 'async'.

const readAndLog = async () => {
    try {
        const data = await readFilePromise('archivo.txt')
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

readAndLog();



//////////////////////// RESUMEN //////////////////////
/*
*Node.js utiliza un modelo de concurrencia basado en eventos y no bloqueante.
*El Event Loop permite manejar múltiples operaciones simultáneamente.
*Callbacks, Promises y Async/Await son herramientas para manejar la asincronía de manera efectiva en Node.js.
*Promises y Async/Await son preferibles para evitar el "Callback Hell" y mejorar la legibilidad del código.
*/