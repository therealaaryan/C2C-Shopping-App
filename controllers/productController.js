const Product = require('../Models/productModels')
const asyncHandler = require('express-async-handler')

//display all products
const getProducts = asyncHandler(async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//display product by id
const getProduct = asyncHandler(async(req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//post a product
const createProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//update a product
const updateProduct = asyncHandler(async(req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            res.status(404).json({message: `Cannot find product by the ${id}`})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//delete a product
const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message: `Cannot find product by ${id}`})
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})


module.exports = {getProduct, getProducts, createProduct, updateProduct, deleteProduct}