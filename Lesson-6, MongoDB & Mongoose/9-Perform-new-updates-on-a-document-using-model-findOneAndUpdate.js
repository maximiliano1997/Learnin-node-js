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

const findAndUpdate = async (personName) => {
    try {
        const updatedPerson = await Person.findOneAndUpdate(
            { name: personName },
            { age: 200 },
            { new: true } // Esta opcion indica que deseas que devuelva el docu. actualizado despues de realizar la actualizacion
        )
        if (!updatedPerson) {
            console.log("Person not found")
            return;
        }

        console.log("Successfully Updated:", updatedPerson)
    } catch (error) {
        console.error("Error Found:", error)
    }
}

findAndUpdate('Santiago')




app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})