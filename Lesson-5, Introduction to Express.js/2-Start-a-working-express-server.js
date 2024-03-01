const express = require('express')
const app = express()
port = process.env | 3000



app.get('/', (req, res) => {
    res.send('Hello Express')
})


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})