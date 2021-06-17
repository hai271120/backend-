const Addinform = require('../Model/addinform')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const addinform = require('../Model/addinform');
const addinformctrl ={
    addinform : async (req,res) =>{
        try {
            const { fullname,phone,email,linkpage,job,address,note} =req.body;
            const newinform = new Addinform({
                fullname,phone,email,linkpage,job,address,note
            })
           await newinform.save()
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = addinformctrl