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


// Solution:
function createManyPeople(arrayOfPeople) {
    Person.create(arrayOfPeople)
}

createManyPeople([{ name: 'Lucas', age: 22, favoriteFoods: ['Leche', 'Empanadas'] }, { name: 'Santino', age: 12, favoriteFoods: ['Milanesa', 'Masitas'] }, { name: 'Santiago', age: 33, favoriteFoods: ['Asado', 'Ensaladas'] }])

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})