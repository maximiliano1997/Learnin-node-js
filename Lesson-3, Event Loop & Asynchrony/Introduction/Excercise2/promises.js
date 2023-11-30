// Ejercicio 2: Promises
// Implementa una función que utiliza Promises para realizar operaciones asincrónicas, como la lectura de un archivo y la manipulación de datos.Asegúrate de manejar los casos de éxito y error de manera adecuada.

const fs = require('fs/promises')

const readFilePromise = (file) => {
    return fs.readFile(file, 'utf-8');
}

const combineAndWriteFiles = (file1, file2, outputFile) => {
    return Promise.all([readFilePromise(file1), readFilePromise(file2)])
        .then(([data1, data2]) => {
            const combinedData = `${data1}, ${data2} (Unidos Exitosamente)`;
            return fs.writeFile(outputFile, combinedData, 'utf-8');
        })
        .then(() => {
            console.log('Union Exitosa y guardada en', outputFile);
        })
        .catch((err) => {
            console.error('Error:', err)
        });
};

combineAndWriteFiles('archivo1.txt', 'archivo2.txt', 'archivo1y2Unidos.txt');



/*
En este ejercicio:
'readFilePromise' es una función que devuelve una Promise para leer un archivo de manera asíncrona.
'combineAndWriteFiles' utiliza 'Promise.all' para leer ambos archivos de manera simultánea y luego combina los datos y los guarda en un tercer archivo.
La función maneja los casos de éxito y error de manera adecuada utilizando 'then' y 'catch'.


Este enfoque con Promises proporciona un código más limpio y estructurado en comparación con los callbacks anidados. También es más fácil de entender y mantener.
*/