const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    customerId: Number,
    firstName: String,
    lastName: String,
    orders: Array

})

module.exports = mongoose.model('customer', customerSchema)