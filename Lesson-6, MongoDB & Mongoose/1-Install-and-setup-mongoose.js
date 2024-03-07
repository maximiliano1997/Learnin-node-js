const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))

// npm install mongoose <---- first

// try {

//     mongoose.connect(process.env.MONGO_URI, (err) => {
//         if (err) throw err;
//     })

// } catch (err) {
//     console.error('Error connecting to MongoDB', err)
// }

mongoose.connect(process.env.MONGO_URI)
    .then((success) => console.log('conextion exitosa'))
    .catch((err) => console.error(err))



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})