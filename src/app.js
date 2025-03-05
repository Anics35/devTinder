const express = require ("express");

const app = express();

//request handler
app.use("/hello",(req,res)=>
    {
        res.send("Hello hello hello!")
    })


app.use("/test",(req,res)=>
{
    res.send("Hiii from the server!")
})

  
app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port 3000...");
    });