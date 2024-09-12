const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')


const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    console.log(req.headers)

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided')
    }

    const token = authHeader.split(' ')[1]
    console.log('prb0   ', token)

    try {
        console.log('prb1')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded

        if (!decoded) {
            console.log('what')
        }

        console.log('prb2', decoded)
        req.user = { id, username }
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

module.exports = authenticationMiddleware