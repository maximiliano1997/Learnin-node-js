
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
const queryChain = async (foodToSearch) => {
    try {
        const data = await Person
            .find({ favoriteFoods: foodToSearch })
            .sort({ name: 1 })
            .limit(2)
            .select('-age')  // el - antes de age sirve para esconderlo del resultado
            .exec(console.log('Todo Exitoso! kkkkk'))

        console.log(data)
        return data;
    } catch (error) {
        throw new Error('msg:', error)
    }



}

// const done = (err, data) => {
//     if (err) {
//         console.error("Error:", err)
//     } else {
//         console.log("Data:", data)
//     }
// }

queryChain('Milanesas')

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})



