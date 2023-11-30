const fs = require('fs/promises')

const readFileAsync = async (file) => {
    try {
        return await fs.readFile(file, 'utf-8')
    } catch (err) {
        throw err;
    }
};

const combineAndWriteFilesAsync = async (file1, file2, outputFile) => {
    try {
        const [data1, data2] = await Promise.all([readFileAsync(file1), readFileAsync(file2)])

        const combinedData = `${data1}, ${data2} (Unidos exitosamente)`;

        await fs.writeFile(outputFile, combinedData, 'utf-8');

        console.log('Union Exitosa y Guardada en: ', outputFile);
    } catch (err) {
        console.error('Error: ', err);
    }
};



combineAndWriteFilesAsync('archivo1.txt', 'archivo2.txt', 'archivosUnidos.txt');

/*
En este ejercicio 3:

- `readFileAsync` es una función asincrónica que utiliza Async/Await para leer un archivo de manera asíncrona.
- `combineAndWriteFilesAsync` utiliza Async/Await para realizar operaciones asincrónicas, como la lectura de ambos archivos y la escritura del archivo combinado.
- La función maneja los errores de manera efectiva utilizando `try/catch`.

Este enfoque hace que el código sea más limpio y fácil de entender al evitar el anidamiento excesivo de callbacks y al permitir un manejo más claro de los errores.
*/