const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/userRoutes');
const productRoute = require('./routes/productRoutes');

const app = express();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected Successful!"))
    .catch(err => console.log("MongoDB connection failed: ", err));

app.use(express.json());

app.get('/', function (req, res) {
    res.send("Welcome !");
});

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

const port = 4000;
app.listen(port, function () {
    console.log(`Server is running on port ${port}...`);
});


// MVC - Model - View - Controller

// Model - data & database logics,
// Controller - user input / app logics
// View - displaying data / view engine( ejs, pug )

// separation of concern
