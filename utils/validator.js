const Joi = require("@hapi/joi");

const registrationIsValid = (data) => {
    const validationSchema = {
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
    };

return Joi.validate(data, validationSchema);

};

const loginIsValid = (data) => {
    const validationSchema = {
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
    };

return Joi.validate(data, validationSchema);

};

module.exports.registrationIsValid = registrationIsValid;
module.exports.loginIsValid = loginIsValid;