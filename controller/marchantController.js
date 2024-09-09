const Store = require('../models/marchantSchema.js')
const Userlist = require('../models/userSchema')

async function becomeMarchant(req, res) {
    const { storename, officialmail, officialphone, address, owner, product } = req.body

    const store = new Store({
        storename,
        officialmail,
        officialphone,
        address,
        owner,
        product
    })
    store.save()

    await Userlist.findOneAndUpdate(
        { _id: owner },
        { role: "marchant" },
        { new: true }
    )

    res.json("store")
}

module.exports = becomeMarchant;