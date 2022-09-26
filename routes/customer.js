const express = require('express');
const router = express.Router();
const Customer = require('../model/Customer')

router.get('/getcustomers',async(req,res)=>{
    try{

        const data = await Customer.find();
        res.json(data)
    }catch(e){
        res.json(e)
    }
})

module.exports = router;
