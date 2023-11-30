// Ejercicio 1: Callbacks
// Crea una función que simule la lectura de dos archivos de texto de manera asíncrona utilizando callbacks.Luego, combina el contenido de ambos archivos y guárdalo en un tercer archivo.

const fs = require('node:fs')


const dobleRead = () => {
    fs.readFile('archivo1.txt', 'utf8', (err, dataOne) => {
        if (err) console.error(err);
        fs.readFile('archivo2.txt', 'utf8', (err, dataTwo) => {
            if (err) console.error(err);
            fs.writeFile('archivo1y2Unidos.txt', `${dataOne}, ${dataTwo} (Unidos exitosamente!)`, (err) => {
                if (err) console.error(err);
                console.log('Union Exitosa!')
            })
        })
    })
}

dobleRead()

/*
En este ejercicio:

 Has creado una función llamada dobleRead que utiliza la función fs.readFile para leer de manera asíncrona dos archivos de texto (archivo1.txt y archivo2.txt). Luego, combinas el contenido de ambos archivos y lo guardas en un tercer archivo llamado archivo1y2Unidos.txt utilizando la función fs.writeFile.

Es importante tener en cuenta que, en tu código, estás separando las lecturas y la escritura en tres bloques de código anidados. Esto a veces se denomina "Callback Hell" o "Pyramid of Doom". Puedes mejorar la legibilidad y mantenimiento del código utilizando técnicas como modularización o Promises/Async-Await para manejar la asincronía de manera más ordenada. Sin embargo, tu implementación actual cumple con el requisito básico del ejercicio.
*/