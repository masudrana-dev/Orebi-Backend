const express = require('express');
const router = express.Router()
const { secureProduct, createProduct } = require('../../controller/ProductController')

router.post('/createproduct', secureProduct, createProduct)

module.exports = router; 