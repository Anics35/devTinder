const express = require("express")
const requestRouter = express.Router();
const { userAuth } = require("../middleware/auth")

requestRouter.post("/sendConnectionRequest", userAuth, async(req, res)=>{
  
  const user = req.user;
  console.log("Sending a connection request");

  res.send("Connection req sent!!!")
   
})


module.exports = requestRouter;