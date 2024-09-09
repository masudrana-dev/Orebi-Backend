const mongoose = require('mongoose')
const { Schema } = require("mongoose")

const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    isActive: {
        type: String,
        default: false
    },
    status: {
        type: String,
        // default: "waiting",
        enum: ['waiting ', "rejected", "approved"]
    },
    catagory: {
        type: Schema.Types.ObjectId,
        ref: "CategoryList"
    },
    created: {
        type: String,
        default: new Date()
    },
    update: {
        type: Date
    }
})

module.exports = mongoose.model("SubCategoryList", subCategorySchema)