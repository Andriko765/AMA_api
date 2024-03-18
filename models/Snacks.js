const mongoose  = require ('mongoose')

const SnackModel = new mongoose.Schema({
    title: String,
    catagory: String,
    availability: Boolean,
    price : String,
    description:String,
    img: {type: String , required: true}
})

const  Snack = mongoose.model('Snack', SnackModel)

module.exports= Snack;
// export default Pizza;