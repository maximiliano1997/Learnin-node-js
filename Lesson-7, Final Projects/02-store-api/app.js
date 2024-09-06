require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

// First Middlewares


// Routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products">products route<a/>')
})
app.use('/api/v1/products', productsRouter)


// Last Middlewares




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
            .then((success) => console.log('Conexion exitosa a la DB...'))
            .catch((error) => console.log("Error en connectDB: ", error))


        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()





