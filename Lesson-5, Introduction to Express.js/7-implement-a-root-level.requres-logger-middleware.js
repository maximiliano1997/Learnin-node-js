const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000
require('dotenv').config()


app.use('/', (req, res, next) => {
    const method = req.method
    const path = req.path
    const ip = req.ip

    console.log(`${method} ${path} - ${ip}`)

    next()
})





app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})