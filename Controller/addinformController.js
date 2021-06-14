const Addinform = require('../Model/addinform')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const addinform = require('../Model/addinform');
const addinformctrl ={
    addinform : async (req,res) =>{
        try {
            const { name,phone,email,linkpage,job,address,note} =req.body;
            const addinform =await Addinform.findOne({email})
            if(phone.length <10)
            return res.status(400).json({msg:"sdt khong phu hop"})
            const newinform = new Addinform({
                name,phone,email,linkpage,job,address,note
            })
           await newinform.save()
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = addinformctrl