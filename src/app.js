const express = require ("express");

const app = express();

const {adminAuth, userAuth}=require("./middleware/auth")
// Auth Middleware
app.use("/admin", adminAuth);

// User Route
app.get("/user", userAuth, (req, res) => {
    res.send("User Data Sent");
});

// Admin Route
app.get("/admin/getAllData", (req, res) => {
    res.send("Admin Data Sent");
});


app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port 3000...");
    });    