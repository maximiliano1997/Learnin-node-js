// 4. ** Proyecto de Descarga de Imágenes:**
// - Desarrolla un programa que descargue imágenes desde Internet y las guarde localmente utilizando streams para gestionar eficientemente la descarga y escritura de archivos.
const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const app = express();

const imageUrl = 'https://dplnews.com/wp-content/uploads/2020/10/dplnews_SpaceX_mc261020.jpg'
const fileName = path.basename(imageUrl)

// Ruta donde se guardara la imagen localmente
const localPath = path.join(__dirname, './images', fileName)

app.get('/', (req, res) => {
    // Crea una stream de escritura hacia el archivo local
    const writeStream = fs.createWriteStream(localPath)

    // Descarga la imagen utilizando axios y la guarda localmente urilizando streams
    axios({
        method: 'get',
        url: imageUrl,
        responseType: 'stream' // Configura axios para que devuelva un Stream
    })
        .then((response) => {
            // Pipe: Conecta el stream de lectura de axios al stream de escritura local
            response.data.pipe(writeStream)


            // Maneja eventos de cierre del stream de escritura
            writeStream.on('finish', () => {
                console.log('Descargar Completa. Imagen guardada en ', localPath)
                res.send(`Descarga Exitosa. \nImagen guardada en:\n ${localPath}`)
            })
        })
        .catch((error) => {
            console.error('Error al Descargar la imagen: ', error.message)
        })
})

const port = 3000

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
