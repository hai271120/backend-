const Product = require("../Model/Product")

const productCtrl = {
    getproduct: async (req,res)=>{
        try {
           const products = await Product.find()
           res.json(products)
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    createProduct: async (req,res)=>{
        try {
            const {discovery,activity,voucher}= req.body;
            if(!discovery) return res.status(400).json({msg: "no dicovery"});
            const newproduct = new Product({
                discovery,activity,voucher
            })
            await newproduct.save();
            res.json({msg:"success"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
  
}
module.exports = productCtrl;