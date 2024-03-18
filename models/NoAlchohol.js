const mongoose = require ('mongoose')

const NoAlchoholModel = new mongoose.Schema({
    title : String,
    description: String,
    availability: Boolean,
    price: String,
    img: { type:String , required: true}
})

 const NoAlchohol = mongoose.model('NoAlchohol' , NoAlchoholModel)

 module.exports = NoAlchohol;