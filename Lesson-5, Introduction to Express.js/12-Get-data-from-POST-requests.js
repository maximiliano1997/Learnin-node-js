const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.post('/name', (req, res) => {
    const { first, last } = req.body
    console.log(req.body)

    res.json({ name: `${first} ${last}` })
})


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})