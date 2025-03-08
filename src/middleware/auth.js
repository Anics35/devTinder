export const adminAuth = (req, res, next) => {
    console.log("Admin auth gettting checked");
    
    const token = "xyz";
    const isAdminAuthorized = req.headers.authorization === token;
    
    if (!isAdminAuthorized) {
        return res.status(403).send("Unauthorized request");
    }
    next();
};
