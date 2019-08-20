const express = require("express");
const router = express.Router();
const {getAllPosts, getPostById, createPost, deletePost} = require("../controllers/postsController");

router.get("/", getAllPosts);
router.get("/:postId", getPostById);
router.post("/", createPost);
router.delete("/:postId", deletePost);

module.exports = router;


