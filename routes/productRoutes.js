const express = require('express');
const {getProduct, getProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')
const router = express.Router();

//display all products
router.get('/products', getProducts)

//display single product by id
router.get('/products/:id', getProduct)

//post product
router.post('/products', createProduct)

//update product
router.put('/products/:id', updateProduct)

//delete product by id
router.delete('/products/:id', deleteProduct)

module.exports = router;