const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000
require('dotenv').config()

function middle(req, res, next) {

    req.time = new Date().toString()
    next()
}


app.get('/now', middle, (req, res) => {

    res.json({ time: req.time })

})



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})