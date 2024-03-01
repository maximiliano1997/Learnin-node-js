const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000
require('dotenv').config()




app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word })
})



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})