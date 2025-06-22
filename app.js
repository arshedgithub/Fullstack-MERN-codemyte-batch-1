const express = require('express');

const userRoute = require('./routes/userRoutes');

const app = express();

app.get('/', function (req, res) {
    res.send("Welcome !");
});

// app.use(express.json);
app.use('/api', userRoute);

const port = 4000;
app.listen(port, function () {
    console.log(`Server is running on port ${port}...`);
});


// MVC - Model - View - Controller  

// Model - data & database logics, 
// Controller - user input / app logics
// View - displaying data / view engine( ejs, pug )

// separation of concern
