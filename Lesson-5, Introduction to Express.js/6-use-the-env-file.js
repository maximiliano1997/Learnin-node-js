const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000
require('dotenv').config()




app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({ "message": "HELLO JSON" })
    } else {
        res.json({ "message": "Hello json" })
    }
})





app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})