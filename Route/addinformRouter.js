const router = require('express').Router()
const addinformctrl = require('../Controller/addinformController')

router.post("/addinform",addinformctrl.addinform)
module.exports = router