const mongoose = require('mongoose')
const { Schema } = require("mongoose")

const categorySchema = new Schema({
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
        default: "waiting",
        enum: ["waiting", "rejected", "approved"]
    },
    subCategory: [
        {
            type: Schema.Types.ObjectId,
            ref: "SubCategoryList"
        }
    ],
    created: {
        type: String,
        default: new Date()
    },
    update: {
        type: Date
    }
})

module.exports = mongoose.model("CategoryList", categorySchema)