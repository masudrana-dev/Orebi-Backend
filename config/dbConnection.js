const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// 7JpHQPit0bemM1p8
// orebi-ecommerce
// mongodb+srv://<username>:<password>@cluster0.wnb3rs9.mongodb.net/?retryWrites=true&w=majority
function dbConnection() {
    mongoose.connect(process.env.MONGODBURI)
        .then(() => console.log('connect'))
}

module.exports = dbConnection;