const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
      username: { type: String, trim: true, unique: true, required: true },
      email: { type: String, trim: true, unique: true, required: true },
      hashedPassword: { type: String, unique: true, required: true, min: 6},
      createdAt: {type: Date, default: Date.now},

});

module.exports = mongoose.model("User", UserSchema);