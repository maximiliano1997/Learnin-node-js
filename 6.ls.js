const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error al rleer el directorio', err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})