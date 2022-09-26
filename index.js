require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json())
const customerRoute = require('./routes/customer')
const cors =require('cors')

app.use(cors())



// mongodb atlas connection 
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("first")
})



// get data route 

app.use('/',customerRoute)


app.listen(process.env.PORT || 8000, () => {
    console.log("running on port 80 ")
})