const router = require('express').Router()
const productCtrl = require('../Controller/productController')
router.route('/product')
    .get(productCtrl.getproduct)
    .post(productCtrl.createProduct)
    module.exports = router