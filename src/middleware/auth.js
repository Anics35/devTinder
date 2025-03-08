 const adminAuth = (req, res, next) => {
    console.log("Admin auth gettting checked");
    
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    
    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request");
    }
else{
    next(); }
};

const userAuth = (req, res, next) => {
    console.log("user auth gettting checked");
    
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    
    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request");
    }

    else{
    next();
    }
};

module.exports= {
    adminAuth,
    userAuth,
};