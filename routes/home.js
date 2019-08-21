const express = require("express");
const router = express.Router();
const verify = require("../utils/verifyToken");

router.get("/", verify, (req, res) =>{
    res.send("<h1>Home it is</h1>");
});

module.exports = router;