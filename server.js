const express = require("express") ;
const bodyParser = require("body-parser");
const session = require("express-session");
const mongo = require ("connect-mongo");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//-------------Routes---------------------------------------------------
const homeRoute = require("./routes/home");
const authRoute = require("./routes/auth")
const loginRoute = require("./routes/login")
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const categoriesRoute = require("./routes/categories");
const commentsRoute = require("./routes/comments");

app.use("/", homeRoute);
app.use("/register", authRoute);
app.use("/login", loginRoute);
app.use("/posts", postsRoute);
// app.use("/user", userRoute);
app.use("/categories", categoriesRoute);
app.use("/comments", commentsRoute);




//-----------Connection to database------------------------------------
const MongoStore = mongo(session);
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
     console.log("db started"));
app.use(
    session({
          resave: true,
          saveUninitialized: true,
          secret: process.env.SESSION_SECRET,
          store: new MongoStore({
            url: process.env.DB_CONNECTION,
            autoReconnect: true,
          }),
        }),
      );
//---------------------------------------- should move to separate file

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});
