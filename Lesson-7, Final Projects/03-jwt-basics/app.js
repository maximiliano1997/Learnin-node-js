// Dependencias
const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 5000

// Middlewares pre-route
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json)

// root routes

// Middlewares after-route

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

start()