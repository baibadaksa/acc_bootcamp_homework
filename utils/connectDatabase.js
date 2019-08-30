const session = require("express-session");
const mongo = require ("connect-mongo");
const mongoose = require("mongoose");
require("dotenv/config");

const MongoStore = mongo(session);
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
     console.log("db started"));

const connectOptions = {
          resave: true,
          saveUninitialized: true,
          secret: process.env.SESSION_SECRET,
          store: new MongoStore({
            url: process.env.DB_CONNECTION,
            autoReconnect: true,
          }),
};

module.exports = connectOptions;
