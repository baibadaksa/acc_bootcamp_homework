const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const { registrationIsValid, loginIsValid} = require("../utils/validator");

const errorMessage = (announcement, res) => {
return res.status(400).send(announcement);
};

const createUser = async (req, res) => {

    const {error} = registrationIsValid(req.body);
    if(error) return errorMessage(error.details[0].message, res);

    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return errorMessage("Email already exists!", res);

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
        errorMessage(err, res);
    }

};

const loginUser = async (req, res) => {
    const {error} = loginIsValid(req.body);
    if(error) return errorMessage(error.details[0].message, res);

    const user = await User.findOne({ email: req.body.email});
    if(!user) return errorMessage("Email or password is wrong!", res);
    const validPass = await bcrypt.compare(req.body.password, user.hashedPassword);
    if(!validPass) return errorMessage("Invalid password!", res);
    const token = jwt.sign({ _id: user._id }, process.env.SESSION_SECRET);
    try{
        res.status(200).header("auth-token", token).json({user, token});
    }catch(err){
        errorMessage(err, res);
    }


}

const getUserById = async (req, res) =>{
  try{
      res.json(await User.findById(req.params.userId));
  }catch(err){
      res.json({message: err});
  }
}


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserById = getUserById;
