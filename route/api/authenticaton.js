const express = require("express")
const router = express.Router()
const registration = require('../../controller/registration')
const emailVerificationController = require("../../controller/emailController")
const loginController = require("../../controller/loginController")
// const app = express()

router.post("/registration", registration)
router.post('/verification', emailVerificationController)
router.post('/login', loginController)

module.exports = router;