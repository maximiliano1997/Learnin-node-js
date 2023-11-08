const fs = require('node:fs/promises')

// Tabmien existe promisify para los modulos nativos que no tienen promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)


console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto', text)
    })

console.log('---> Hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(secondText => {
        console.log('segundo texto', secondText)
    })


