const express = require('express');
const Product = require('./Models/productModels')
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//display all products
app.get('/products', async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//display single product by id
app.get('/products/:id', async(req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//post product
app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//update product
app.put('/products/:id', async(req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            res.status(404).json({message: `Cannot find product by the ${id}`})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
})

app.delete('/products/:id', async(req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message: `Cannot find product by ${id}`})
        }

        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


mongoose.connect('mongodb+srv://aaryanmta:oreoUchiha@cluster0.dcvwhxb.mongodb.net/Shp-API?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, () => {
        console.log("App is running on port 3000");
    })
    console.log("Connected to MongoDB")})
    .catch((error) => console.log(error));