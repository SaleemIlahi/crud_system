
const mongoose = require('mongoose')

// Defining Schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    course: {
        type: String,
        require: true
    },
    percent: {
        type: Number,
        require: true,
        min: 45,
        max: 100
    }
})

const studentModel = mongoose.model('student',studentSchema)

module.exports = studentModel