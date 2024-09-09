// const mongoose = require('mongoose')
// const { Schema } = mongoose;

// const productSchema = new Schema({
//     name: {
//         name: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     },
//     store: {
//         type: Schema.Types.ObjectId,
//         ref: 'Store'
//     }

// })

// module.exports = mongoose.model("Product", productSchema)


const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    }
});

module.exports = mongoose.model("Product", productSchema);
