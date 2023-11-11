const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoutes')
require('dotenv').config();
const app = express();

MONGO_URL = process.env.MONGO_URL
PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', productRoute)


mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    })
    console.log("Connected to MongoDB")})
    .catch((error) => console.log(error));