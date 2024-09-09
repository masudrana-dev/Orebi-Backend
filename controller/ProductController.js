const UserList = require('../models/userSchema')
const productSchema = require('../models/productSchema')

async function secureProduct(req, res, next) {
    // console.log(req.headers.authorization.split('@'))
    const userid = req.headers.authorization.split('@')[1]
    const password = req.headers.authorization.split('@')[2]
    // const [userID, password] = req.headers.authorization.split('@')[1]
    // console.log(userid);

    if (!req.headers.authorization) {
        res.send({ error: 'Unauthorized' })
    } else {
        const user = await UserList.find({ _id: userid })
        // console.log(user)
        // console.log(user);
        if (user.length > 0) {
            if (password == '12345') {
                if (user[0].role == 'marchant') {
                    // middlewere
                    next()
                }
            } else {
                res.json({ error: 'wrong pass' })
            }
        } else {
            res.json({ error: "you are not able to upload" })
        }
    }
}

function createProduct(req, res) {
    const { name, store, image, price, description } = req.body
    console.log(name, store, image, price, description);

    const product = new productSchema({
        name,
        store,
        image,
        price,
        description
    })
    product.save()
    res.json('product created')

}

module.exports = { secureProduct, createProduct };