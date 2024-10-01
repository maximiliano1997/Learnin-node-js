// const { CustomAPIError } = require('../errors')
// const { StatusCodes } = require('http-status-codes')

// const errorHandlerMiddleware = (err, req, res, next) => {
//     if (err instanceof CustomAPIError) {
//         return res.status(err.statusCode).json({ msg: err.message })
//     }


//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
// }



// module.exports = errorHandlerMiddleware


// const { CustomAPIError } = require('../errors');
// const { StatusCodes } = require('http-status-codes');

// const errorHandlerMiddleware = (err, req, res, next) => {
//     // Ensure we have a valid status code
//     const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

//     // If it's a known CustomAPIError, use its status and message
//     if (err instanceof CustomAPIError) {
//         return res.status(statusCode).json({ msg: err.message });
//     }

//     // Log the error for debugging purposes
//     console.error(err);

//     // Send a generic response for unexpected errors
//     return res.status(statusCode).json({
//         msg: 'Something went wrong, please try again later.'
//     });
// };


// WITH NEW REFACTORING OF THE CODE BELOW

const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log({ 'err:': err }, { 'req:': req })

    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong tryu again later',
    }

    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(',lol')
        customError.statusCode = 400
    }

    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value.`
        customError.statusCode = 400
    }

    if (err.name === 'CastError') {
        customError.msg = `No item found with id: ${err.value}`
        customError.statusCode = 400
    }

    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
    return res.status(customError.statusCode).json({ msg: customError.msg })
};


module.exports = errorHandlerMiddleware;

