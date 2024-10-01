// modules or dependecies
require('dotenv').config()
require('express-async-errors')

//SwaggerUI
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

// Security
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const express = require('express')
const app = express()
const connectDB = require('./db/connectDB')
const authenticateUser = require('./middleware/authentication.js')
// routers
const authRouter = require('./routes/auth.js')
const jobsRouter = require('./routes/jobs.js')

// error handler
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// pre middle
app.set('trust proxy', 1)
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 mintes
    max: 100, // limit each IP to 100 request per windowMs
}))

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

// routes
app.use('/api/v1', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)


// after middle
app.use(notFound)
app.use(errorHandlerMiddleware)



// server start()
const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
            .then((success) => console.log('DB Connected !!'))
            .catch((error) => console.log('DB failed to Connect:', error))
        app.listen(port, () => {
            console.log(`Server listening on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()