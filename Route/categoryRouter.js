const router = require('express').Router()
const categoryCtrl = require('../Controller/categoryController')
const auth = require('../middleware/authmiddleware')
const authAdmin = require("../middleware/authadmin")
router.route('/category')
    .get(categoryCtrl.getCategories)
     .post(auth,authAdmin, categoryCtrl.createCategory)

 router.route('/category/:id')
    .delete(auth,authAdmin,categoryCtrl.deleteCategory)
    .put(auth,authAdmin, categoryCtrl.updateCategory)


module.exports = router