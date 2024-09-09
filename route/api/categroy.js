const express = require('express')
const { createCategoryController, categoryStatusController, createSubCategoryController, subCategoryStatusController, getallCategories, getallSubCategories } = require("../../controller/createCategoryController")
// const  = require("../../controller/createCategoryController")
// const  = require("../../controller/createCategoryController")
// const  = require("../../controller/createCategoryController")
const router = express.Router()

router.post('/createcategory', createCategoryController);
router.post('/statuscategory', categoryStatusController);
router.post('/subcategorystatus', subCategoryStatusController);
router.post('/createsubcategory', createSubCategoryController);
router.get('/getallCategories', getallCategories);
router.get('/getallSubCategories', getallSubCategories);

module.exports = router;