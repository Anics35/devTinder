const express = require("express")
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user");

 
app.post("/signup",async (req, res)=>
{

  //creating a new instance of user model
const user = new User ({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "virat@gmail.com",
    password:"qwertyyy"
  });

  try{
  await user.save();
  res.send("user added successfully")
  } catch (err){
    res.status(400).send("Error saving the user:" +err.message)
  }
}
);




connectDB().then(
  ()=>{
      console.log("Database connection successful");
      app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port 3000...");
    }); 
  }
).catch(err=>
{
  console.err("Database cannot be connected")
}
  
)
 

   