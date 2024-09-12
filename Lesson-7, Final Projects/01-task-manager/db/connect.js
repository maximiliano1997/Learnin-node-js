const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url)
        .then((success) => console.log('Conexion exitosa !'))
        .catch((err) => console.log(err))
}

module.exports = connectDB