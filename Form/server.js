const express= require('express');
const port= 4000;
const app =express();

const route = require('./routes/Page_routes')
const handler = require('./routes/handler')
const validator= require('./routes/validator')
app.set('view engine','ejs');
app.use('/register',handler)
app.use('/validate',validator)
app.use('/',route);

app.listen(port,()=>{
    console.log("listening............")
})