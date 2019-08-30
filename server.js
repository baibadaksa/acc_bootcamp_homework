const express = require("express") ;
const bodyParser = require("body-parser");
const session = require("express-session");
const connectOptions = require("./utils/connectDatabase.js");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

//-------------Routes---------------------------------------------------
const homeRoute = require("./routes/home");
const authRoute = require("./routes/auth")
const loginRoute = require("./routes/login")
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const commentsRoute = require("./routes/comments");

app.use("/", homeRoute);
app.use("/register", authRoute);
app.use("/login", loginRoute);
app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/comments", commentsRoute);

app.use(session(connectOptions));

app.listen(process.env.PORT, () => {
    console.log("Server started on port "+ process.env.PORT);
});
