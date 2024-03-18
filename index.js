const express  =require ('express');
const mongoose = require ('mongoose');
const cors  = require ('cors');
const CiderModel = require('./models/Cider');
const PizzaModel = require('./models/Pizza');
const NoAlchohol = require('./models/NoAlchohol');
const Snack = require ('./models/Snacks');
const Alchohol = require ('./models/Alchohol');
require('dotenv').config({path:'./index.env'});

const app = express();
app.use(cors());
app.use (express.json()) ;



const PORT =  process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));




app.get( '/getCiders', async (req, res) =>{
    
    try {
        const data = await CiderModel.find({})
        
        res.json(data)
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    
})

app.get('/getPizza' , async (req,res) => {

    try {
        const data = await PizzaModel.find({})
        res.json(data)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

app.get('/getNO_Alcho' , async (req,res) => {

    try {
        const data = await NoAlchohol.find({})
        res.json(data)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

app.get('/getAlcho' , async (req,res) => {

    try {
        const data = await Alchohol.find({})
        res.json(data)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

app.get('/getSnack' , async (req,res) => {

    try {
        const data = await Snack.find({})
        res.json(data)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

