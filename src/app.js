const express = require ("express");

const app = express();



//request handler
// app.use("/hello",(req,res)=>
//     {
//         res.send("Hello hello hello!")
//     })


//this will handle only GET call to /user
app.get("/user",(req, res)=>{
    res.send({firstName: "Anirban", lastName:"Saha"})
} )


//this will handle only POST call to /user
app.post("/user",(req, res)=>{
 //  console.log("Save Data to database");
   res.send("Data saved successfully")
   
} )

app.delete("/user",(req, res)=>{
    res.send("Deleted successfully")
} )




app.use("/test",(req,res)=>
{
    res.send("Hiii from the server!")
})

// app.use("/", (req, res)=>
//     {
//         res.send("Hello from /!")
//     }
//     )

    
app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port 3000...");
    });