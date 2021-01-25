const mongoose = require('mongoose')
const schema = mongoose.Schema

const Table_schema = new schema({
    Email:String, 
    
    Password:String, 

   

})
module.exports = mongoose.model('Character',Table_schema)
