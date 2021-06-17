const router = require('express').Router()
const productCtrl = require('../Controller/productController')
router.route('/products')
    .get(productCtrl.getproduct)
    .post(productCtrl.createProduct)
    module.exports = router