const express = require ("express");

const app = express();

app.get("/user", (req, res)=>{
    // using ? -> b is optional
    console.log(req.query);
    
    res.send({firstName: "Anirban", lastName:"Saha"});

}
)



app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port 3000...");
    });