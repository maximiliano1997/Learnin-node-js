const { text } = require('body-parser')
const mongoose = require('mongoose')
const { Schema } = mongoose;


const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'debes proveer un nombre'],
        trim: true,
        maxlength: [20, 'name cant be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Tasks', taskSchema);