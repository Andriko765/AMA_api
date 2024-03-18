const mongoose = require ('mongoose')

const CiderSchema = new mongoose.Schema({
    title: String,
    catagory: String,
    availability: Boolean,
    price : String,
    img : String
})

const CiderModel = mongoose.model('Cider', CiderSchema)

module.exports = CiderModel