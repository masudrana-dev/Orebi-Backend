const emailValidation = require('../helpers/emailValidation');
const emailVerificationTemplate = require('../helpers/emailVerificationTemplate');
const sendEmail = require('../helpers/sendEmail');
const UserList = require('../models/userSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registration(req, res) {
    const { firstname, lastname, email, telephone, address1, city, postcode, district, division, password } = req.body
    // console.log(req.body);
    if (!firstname || !lastname) {
        return res.send({ error: "Plz enter firstname or lastname" })
    }
    if (!email) {
        return res.send({ error: "Plz enter email" })
    }
    if (!telephone) {
        return res.send({ error: "Plz enter your number" })
    }

    if (!emailValidation(email)) {
        return res.send({ error: "Enter a valid email" })
    }
    const existingEmail = await UserList.findOne({ email });
    if (existingEmail) {
        return res.send({ error: 'this email is in use' })
    }

    bcrypt.hash(password, 10, function (err, hash) {
        const users = new UserList({
            firstname,
            lastname,
            email,
            telephone,
            address1,
            city,
            postcode,
            district,
            division,
            password: hash
        })
        users.save();
        res.send(users)
        const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
        sendEmail(email, 'Email Verification', emailVerificationTemplate(token))

    });
}

module.exports = registration;
