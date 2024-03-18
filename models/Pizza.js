const mongoose  = require ('mongoose')

const PizzaModel = new mongoose.Schema({
    title: String,
    catagory: String,
    availability: Boolean,
    price : String,
    description:String,
    img: {type: String , required: true}
})

const  Pizza = mongoose.model('Pizza', PizzaModel)

module.exports= Pizza;
// export default Pizza;