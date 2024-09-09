const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        requried: true
    },
    lastname: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    telephone: {
        type: String,
        requried: true
    },
    address1: {
        type: String,
    },
    city: {
        type: String,
    },
    postcode: {
        type: String,
    },
    division: {
        type: String,
    },
    district: {
        type: String,
    },
    password: {
        type: String,
        // required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: 'member',
        enum: ['member', 'admin', 'marchant']
    }
})

module.exports = mongoose.model('UserList', userSchema)