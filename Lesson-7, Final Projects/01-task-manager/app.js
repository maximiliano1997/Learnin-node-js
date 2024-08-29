const { json } = require('body-parser')
const tasks = require('../01-task-manager/routes/tasks')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
require('dotenv').config()
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')


// middlwares
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)


app.use(notFound)
app.use(errorHandlerMiddleware)
// app.get('/', (req, res) => {
//     res.send('20000')
// })

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log('Listening on http://localhost:5000')
        })
    } catch (error) {
        console.log(error)
    }
}

start()