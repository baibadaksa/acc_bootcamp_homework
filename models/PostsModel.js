const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
        title: {type: String, trim: true, unique: false, required: true},
        content: {type: String, trim: true, unique: false},
        postImage: {type: String},
        category: {type: String, unique: false},
        userId: {type: String, unique: false},
        createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Posts", PostsSchema);
