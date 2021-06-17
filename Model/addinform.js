const mongoose = require("mongoose")
const addinformSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    linkpage: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    }, address: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }


}, {
    timestamps: true
})

module.exports = mongoose.model("Addinform", addinformSchema)