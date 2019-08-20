const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");
const { registrationIsValid } = require("../utils/validator");

const createUser = async (req, res) => {

    const {error} = registrationIsValid(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exists!");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        hashedPassword: hashedPassword
    });
    
    try{
        res.send(await user.save());
    }catch(err){
        res.status(400).send(err);
    }
    
};


module.exports.createUser = createUser;