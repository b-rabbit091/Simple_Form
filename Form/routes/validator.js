

const express = require('express');
var bodyParser=require("body-parser"); 

const route= express.Router();
route.use(bodyParser.json()); 
route.use(express.static('public')); 
route.use(bodyParser.urlencoded({ 
	extended: true
})); 

const Schema = require('../Schema/schema')

route.post('/', async function(req,res){ 
	
    let email=req.body.Email; 
    let password =req.body.Password;
    console.log(email);
    console.log(password)
    let msg = await Schema.find({Email:email,Password: password})
    if(msg.length==0)
    {
        res.send("You are not registered yet. Please register first")
    }
  else
  {
      res.send("Welcome!!! Finally you are now registered");
  }

})

module.exports = route;
