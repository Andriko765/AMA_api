const mongoose  = require ('mongoose')

const AlchoholModel = new mongoose.Schema({
    title: String,
    catagory: String,
    availability: Boolean,
    price : String,
    description:String,
    img: {type: String , required: true}
})

const  Alchohol = mongoose.model('Alchohol', AlchoholModel)

module.exports= Alchohol;
// export default Pizza;