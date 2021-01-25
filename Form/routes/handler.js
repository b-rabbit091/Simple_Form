const express= require('express');
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg',{ useUnifiedTopology: true ,useNewUrlParser: true }); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 	
var app=express() 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

const Schema = require('../Schema/schema')

app.get('/',(req,res)=>
{
    res.render('register');
});

app.post('/',async function(req,res){
    let email = req.body.Email;
    let password = req.body.Password;

    let msg = await Schema.find({Email:email})
    if(msg.length!=0)
    {
        res.send("Email already in use ..Try with different email")
    }
    else{

    let data =new Schema({
        "Email" : email,
        "Password":password
    })

    const doc = await data.save() 
		
        console.log(doc)	
        res.send("success");}
})

module.exports = app;