const express = require('express');
const Product = require('../Models/productModels')
const router = express.Router();

//display all products
router.get('/products', async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//display single product by id
router.get('/products/:id', async(req, res) => {
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
router.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//update product
router.put('/products/:id', async(req, res) => {
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

//delete product by id
router.delete('/products/:id', async(req, res) => {
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

module.exports = router;