// Dependencias
require('dotenv').config()
require('express-async-errors')
// const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//routes
const mainRouter = require('./routes/main.js')
const notFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

const port = process.env.PORT || 5000

// Middlewares pre-route
app.use(express.static('./public'))
// app.use(bodyParser)
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// root routes
app.use('/api/v1', mainRouter)

// Middlewares after-route
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()