const mongoose = require('mongoose')
const { Schema } = mongoose;


const JobsSchema = new Schema(
    {
        company: {
            type: String,
            required: [true, "Please provide company name."],
            maxlength: 50,
        },
        position: {
            type: String,
            requried: [true, 'Please provide position'],
            maxlength: 100,
        },
        status: {
            type: String,
            enum: ['interview', 'declined', 'pending'],
            default: 'pending',
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'please provide user'],
        },
    },
    { timestamps: true }
)


module.exports = mongoose.model('Job', JobsSchema)
