const express = require('express')
const app = express()
path = require('path')
port = process.env | 3000


app.use(express.static('/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})