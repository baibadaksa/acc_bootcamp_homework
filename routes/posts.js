const express = require("express");
const router = express.Router();
const upload = require("../utils/FileHandle.js")
const {getAllPosts, getPostById, getPostByCategory, createPost, deletePost} = require("../controllers/postsController");

router.get("/", getAllPosts);
router.get("/:postId", getPostById);
router.get("/category/:categoryName", getPostByCategory);
router.post("/", upload.single("postImage"), createPost);
router.delete("/:postId", deletePost);

module.exports = router;
