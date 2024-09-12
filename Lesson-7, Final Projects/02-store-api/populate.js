require('dotenv').config()
const connectDB = require('./db/connect')

const jsonProducts = require('./products.json')
const Product = require('./models/product')




const startPopulate = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
            .then((success) => console.log('Connect exitoso: ', success))
            .catch((error) => console.log('Connect fallido: ', error))

        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Populate exitoso !!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startPopulate()
