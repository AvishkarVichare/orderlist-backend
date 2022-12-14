require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json())
const customerRoute = require('./routes/customer')
const cors =require('cors')
const uri = process.env.DB_URL;
const port = process.env.PORT || 8000

app.use(cors())



// mongodb atlas connection 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("first")
})



// get data route 

app.use('/',customerRoute)


app.listen(port, () => {
    console.log("running on port 80 ")
})
