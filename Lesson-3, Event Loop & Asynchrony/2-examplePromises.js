// Usando Promesas

const fs = require('fs');

const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile("./Introduction/Excercise1/archivo1.txt", "utf-8", (err, data) => {
        if (err) {
            reject(err)
            return
        }
        resolve(data)
    })
})

readFilePromise
    .then(data => console.log("Contenido del archivo recibido data: ", data))
    .catch(err => console.error("Error: ", err))