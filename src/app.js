const express = require ("express");

const app = express();


//middlewares
app.use("/", (req, res, next)=>{
    console.log("Handling the route user");
    //res.send("Response")
    next();
},
(req, res,next)=>{
    console.log("Handling route user 2!");
    next();
   // res.send("3rd respose")
   
},
(req, res,next)=>{
    console.log("Handling route user 3!");
    res.send("4th respose")
   // req handler
}


)


app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port 3000...");
    });    