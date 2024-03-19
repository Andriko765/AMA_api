const mongoose  = require ('mongoose');

const HotDogModel = new  mongoose.Schema({
    title: String,
    catagory: String,
    availability: Boolean,
    price : String,
    description:String,
    img: {type: String , required: true}
})

const HotDog =  mongoose.model('HotDog', HotDogModel);
module.exports= HotDog;