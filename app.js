const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express()
dotenv.config({ path: "./config.env" });


// middleware
app.use(express.json());
const aliensRoute = require("./routes/aliens")
app.use('/aliens', aliensRoute)


// conect to db

mongoose.connect(process.env.DB ,{useNewUrlParser: true})
    .then(() => {
        console.log('database connected');
    }).catch((err) => {console.log(err)})





// listiening to server
app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})
