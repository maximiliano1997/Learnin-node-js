
const fs = require('fs');

fs.readFile("./Introduction/Excercise1/archivo1.txt", "utf8", function (err, data) {
    if (err) {
        console.log(err)
        return
    }
    console.log("contenido del archivo", data)
})