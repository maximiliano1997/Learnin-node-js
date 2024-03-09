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
const removeManyPeople = async (nameToRemove) => {
    try {
        const resultado = await Person.deleteMany({ name: nameToRemove })
        if (!resultado) {
            throw new Error('Remove action failed')
            return;
        }
        console.log('Remove action success!', resultado)
    } catch (error) {
        console.error({ Error: error })
    }
}

removeManyPeople('Santiago')

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})