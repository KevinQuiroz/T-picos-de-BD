const express= require('express');

//create express server
const app= express();

//route
app.get('/',(req,res)=>{

    console.log('Request Succesful/')
    res.json({
    ok: true,
    msg:"I catch",

    });

});


//configure port
app.listen(4000,()=> {
    console.log(`Run on port ${4000}`);
})
