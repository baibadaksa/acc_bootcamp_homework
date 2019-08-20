const express = require("express");
const router = express.Router();
const {getCommentById, createComment, deleteComment} = require("../controllers/commentsController");

router.get("/:commentId", getCommentById);
router.post("/", createComment);
router.delete("/:commentId", deleteComment);

module.exports = router;
