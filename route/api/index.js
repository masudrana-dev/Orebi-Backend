const express = require('express')
const router = express.Router()
const authRouter = require('./authenticaton')
const categoryRouter = require('./categroy')
const marchantRouter = require('./marchant')
const productRouter = require('./product')

// const authApiRoute = process.env.BASE_AUTH_URL
// const createCategory = process.env.BASE_CATEGORY_URL

router.use("/authenticaton", authRouter);
router.use("/category", categoryRouter);
router.use('/marchant', marchantRouter)
router.use('/product', productRouter)

module.exports = router;
