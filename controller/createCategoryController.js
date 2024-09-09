const CategoryList = require('../models/categorySchema')
const subCategoryList = require('../models/subCategorySchema')

async function createCategoryController(req, res) {
    const { name, description } = req.body;
    const duplicateCategory = await CategoryList.find({ name })
    if (duplicateCategory.length > 0) {
        return res.json({ error: 'this category is exist' })
    }
    const category = new CategoryList({
        name,
        description
    })
    // res.json({ success: 'category create successfully ' })
    category.save()
    return res.json({ success: 'category create successfully ' })
}

async function categoryStatusController(req, res) {

    const { name, status } = req.body
    res.json(status)

    if (status == "rejected" || status == "waiting") {
        const updateCategory = await CategoryList.findOneAndUpdate(
            { name },
            // { isActive: false, status: status },
            { $set: { isActive: false, status: status } },
            { new: true }
        )
    }
    else if (status == 'approved') {
        const updateCategory = await CategoryList.findOneAndUpdate(
            { name },
            // { isActive: true, status: status },
            { $set: { isActive: true, status: status } },
            { new: true }
        )
    }
    res.send('status')
}

// // sub catergory 

async function createSubCategoryController(req, res) {
    const { name, description, category } = req.body;

    const duplicateCategory = await subCategoryList.find({ name })

    if (duplicateCategory.length > 0) {
        return res.json({ error: 'this category is exist' })
    }
    const subCategory = new subCategoryList({
        name,
        description,
        category
    })
    subCategory.save()

    console.log(subCategory._id)
    // console.log(subCategory.category);
    // res.json({ success: 'category create successfully ' })
    const updateCategory = await CategoryList.findOneAndUpdate(
        { _id: category },
        // { _id: subCategory.category },
        { $push: { subCategory: subCategory._id } },
        { new: true }
    )

    return res.json({ success: ' category create successfully ' })
}

async function subCategoryStatusController(req, res) {
    const { name, status } = req.body
    res.json(status)

    if (status == "rejected" || status == "waiting") {
        const updateCategory = await subCategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: false, status: status } },
            { new: true }
        )
    }
    else if (status == 'approved') {
        const updateCategory = await subCategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: true, status: status } },
            { new: true }
        )
    }
}
// sub catergory 

// all categories 
async function getallCategories(req, res) {
    const data = await CategoryList.find({}).populate('subCategory')
    res.json(data)
}
async function getallSubCategories(req, res) {
    const data = await subCategoryList.find({})
    res.json(data)
}
// all categories 

module.exports = { createCategoryController, createSubCategoryController, subCategoryStatusController, categoryStatusController, getallCategories, getallSubCategories };