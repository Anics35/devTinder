const express = require ("express");

const app = express();


// Auth Middleware
app.use("/admin", (req, res, next) => {
    console.log("Admin auth gettting checked");
    
    const token = "xyz";
    const isAdminAuthorized = req.headers.authorization === token;
    
    if (!isAdminAuthorized) {
        return res.status(403).send("Unauthorized request");
    }
    next();
});

// User Route
app.get("/user", (req, res) => {
    res.send("User Data Sent");
});

// Admin Route
app.get("/admin/getAllData", (req, res) => {
    res.send("Admin Data Sent");
});


app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port 3000...");
    });    