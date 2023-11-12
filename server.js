const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const productRoute = require('./routes/productRoutes')
const errorMiddleware = require('./middlewares/errorMiddleware')
require('dotenv').config();
const app = express();

MONGO_URL = process.env.MONGO_URL
PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', productRoute)


app.get('/', (req, res) => {
    res.send("Hello there!");
})

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    })
    console.log("Connected to MongoDB")})
    .catch((error) => console.log(error));