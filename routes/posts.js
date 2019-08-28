const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }});
const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true);
    }else{
        cb(new Error("Unsupported file format"), true);
    }
}
const upload = multer({storage: storage, fileFilter: fileFilter});
const {getAllPosts, getPostById, getPostByCategory, createPost, deletePost} = require("../controllers/postsController");

router.get("/", getAllPosts);
router.get("/:postId", getPostById);
router.get("/category/:categoryName", getPostByCategory);
router.post("/", upload.single("postImage"), createPost);
router.delete("/:postId", deletePost);

module.exports = router;
