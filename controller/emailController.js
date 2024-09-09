const jwt = require("jsonwebtoken")
const UserList = require('../models/userSchema')

async function emailVerificationController(req, res) {
    const { authorization } = req.headers

    const decode = jwt.verify(authorization, process.env.TOKEN_SECRET)

    const updateUser = await UserList.findByIdAndUpdate(
        { email: decode.email },
        // { verified: true },
        { new: true }
    )
    // console.log(updateUser);
    res.send(updateUser)
}

module.exports = emailVerificationController; 