const fs = require('fs');

async function leerArchivoAsincrono() {
    try {
        const data = await fs.promises.readFile("./Introduction/Excercise1/archivo1.txt", "utf-8");
        console.log("Contenido del Archivo: ", data);
    } catch (err) {
        console.error("Error: ", err);
    }
}

leerArchivoAsincrono()