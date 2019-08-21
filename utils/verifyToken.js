const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if(!token) return  res.status(401).send("Not allowed here");

    try{
        const verified = jwt.verify(token, process.env.SESSION_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send("Invalid token");
    }
};

module.exports = verifyToken;