const express = require("express");
const router = express.Router();
const { getUserById } = require("../controllers/userController");

router.get("/", getUserById);

module.exports = router;
