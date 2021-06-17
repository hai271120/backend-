const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    discovery:{
        type: Object,
        required: true
    },
   activity:{
        type: Object,
        required: true
    },
    voucher:{
        type: Object,
        required: true
    },

},{
    timestamps: true
})

var Product = mongoose.model("Product", productSchema)
module.exports = Product;