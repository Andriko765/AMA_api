const mongoose = require('mongoose');

const  ShotModel = new mongoose.Schema({
    title: String,
    catagory: String,
    availability: Boolean,
    price : String,
    description:String,
    img: String
})

const Shot  = mongoose.model('Shot',ShotModel);

module.exports = Shot ; 

