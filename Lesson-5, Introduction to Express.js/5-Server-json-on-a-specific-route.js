const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000




app.get('/json', (req, res) => {
    res.json({ "message": "Hello json" })
})













app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})