// const cowsay = require('cowsay')
// const { frutas, dinero } = require('./frutas')

// frutas.forEach(fruta => {
//     console.log(fruta)
//     console.log(dinero)
// })

// console.log(cowsay.say({
//     text: 'hOLA AMIGOS DEL IMA',
//     e: "oO",
//     T: "U "
// }))






// // const datos = [
// //     { nombre: 'Juan', edad: 30 },
// //     { nombre: 'Imanol', edad: 24 },
// // ];

// // console.table(datos)
// // console.info(datos)
// // console.dir(datos)



// // console.group("Grupo 1")
// // console.log("team 1")
// // console.log("team 2")
// // console.groupEnd();

// // console.time("Tiempo de ejecución");
// // // Código que quieres medir
// // console.groupCollapsed("Grupo 2");
// // console.log("Mensaje 3");
// // console.log("Mensaje 4");
// // console.groupEnd()
// // console.timeEnd("Tiempo de ejecución");








/////////////////////////////////////////////////////////

//// Servidor HTTP

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('Respuesta del Servidor....')
//     res.end('Te envio un saludo desde el servidor v.5 !!!')
// })

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//     console.log(`El servidor se escucha en http://localhost:${PORT}`)
// })



//// Servidor HTTP con Express
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

// parse appilcation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


require('dotenv').config()


const port = process.env.PORT || 3000;

// Conexion a Base De Datos
const mongoose = require('mongoose')

// const user = 'bluuweb_prac';
// const password = 'qNvdZlPgOtRZUMc0';
// const dbname = 'veterinaria'
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rybbjb7.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;


mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada!!!'))
    .catch((e) => console.log(e))

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        error: "Error"
    })
})

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
})