const express = require('express')
const app = express()
const path = require('path')
const port = process.env | 3000



app.use('/public', express.static('public'))



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})