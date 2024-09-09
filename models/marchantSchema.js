const mongoose = require('mongoose')
const { Schema } = mongoose;

const storeSchema = new Schema({
    storename: {
        type: String,
        required: true
    },
    officialmail: {
        type: String,
        required: true
    },
    officialphone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'UserList'
    },
    product: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
    ]
})

module.exports = mongoose.model('Store', storeSchema)