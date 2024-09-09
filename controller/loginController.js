const emailValidation = require("../helpers/emailValidation");
const UserList = require('../models/userSchema')
const bcrypt = require('bcrypt');
async function loginController(req, res) {
    const { email, password } = req.body
    if (!email) {
        return ({ error: "plz enter your email" })
    } else if (!emailValidation(email)) {
        return ({ error: "plz enter your correct email" })
    } else if (!password) {
        return ({ error: "plz enter your password" })
    } else {
        const isEmailExist = await UserList.findOne({ email })
        if (!isEmailExist.length > 0) {
            bcrypt.compare(password, isEmailExist.password).then(function (result) {
                if (result) {
                    res.json({ error: "login done" })
                } else {
                    res.json({ error: "password not match " })
                }
            });
            console.log('ok', isEmailExist)
        } else {
            return res.json({ error: "email is not match " })
        }
    }
}

module.exports = loginController;