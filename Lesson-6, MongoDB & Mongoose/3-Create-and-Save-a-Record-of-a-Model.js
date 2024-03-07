const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect(process.env.MONGO_URI)
    .then((success) => console.log('conexion exitosa'))
    .catch((err) => console.error(err))

const { Schema } = mongoose

const personSchema = new Schema({
    name: String,
    age: Number,
    favoriteFoods: [String]
})

const Person = mongoose.model('Person', personSchema)

// Solution
function createAndSavePerson(name, age, favoriteFoods) {
    try {
        let imanolAguer = new Person({ name: name, age: age, favoriteFoods: favoriteFoods })
        if (imanolAguer) {
            imanolAguer.save()
                .then((data) => console.log(`exito en la creacion de ${data}`))
                .catch((err) => console.error(err))
        }
    } catch (error) {
        console.log(error)
    }
}

createAndSavePerson('ImanolAguer', 27, ['Milanesas', 'Papas'])


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})