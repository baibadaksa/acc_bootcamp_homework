const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
        title: {type: String, trim: true, unique: false, required: true},
        content: {type: String, trim: true, unique: false},
        categoryId: {type: String, unique: false},
        userId: {type: String, unique: false},
        commentId: {type: String, unique: false},
        createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Posts", PostsSchema);

