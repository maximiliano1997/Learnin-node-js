
import { readFile } from 'node:fs/promises'


Promise.all([
    readFile('./archivo.txt', 'utf8'),
    readFile('./archivo2.txt', 'utf8')
]).then(([text, secondText]) => {
    console.log('primer texto: ', text)
    console.log('segundo texo: ', secondText)
})

