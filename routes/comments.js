const express = require("express");
const router = express.Router();
const {getCommentsByPostId, createComment, deleteComment} = require("../controllers/commentsController");

router.get("/:postId", getCommentsByPostId);
router.post("/", createComment);
router.delete("/:commentId", deleteComment);

module.exports = router;
