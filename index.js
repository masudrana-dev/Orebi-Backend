const express = require('express')
const dbConnection = require('./config/dbConnection')
const app = express()
require('dotenv').config()
const router = require('./route')

const port = 3000
app.use(express.json())
app.use(router)
dbConnection()

app.get("/", (req, res) => {
    res.send('hello world')
    console.log(res.send);
})
app.listen(port)