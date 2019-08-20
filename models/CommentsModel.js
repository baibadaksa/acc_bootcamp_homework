const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
        text: {type: String, trim: true, unique: false},
        userId: {type: String, unique: false},
        createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Comments", CommentsSchema);