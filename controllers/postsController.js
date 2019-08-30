const Posts = require("../models/PostsModel");

const getAllPosts = async (req, res) => {
        try{
            res.json(await Posts.find());
        }catch(err){
            res.json({message: err});
        }
    };

const getPostById = async (req, res) => {
    try{
        res.json(await Posts.findById(req.params.postId));
    }catch(err){
        res.json({message: err});
    }
};

const getPostByCategory = async (req, res) => {
    try{
        res.json(await Posts.find({"category": req.params.categoryName}));
    }catch(err){
        res.json({message: err});
    }
};

const createPost = async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        content: req.body.content,
        postImage: req.file.path,
        category: req.body.category,
        userId: req.body.userId

    });
    try{
        res.json(await post.save());
        res.send(payload);
    }catch(err){
        res.json({message: err});
    }
};

const deletePost = async (req, res) => {
    try{
        res.json(await Posts.remove({ _id: req.params.postId}))
    }catch(err){
        res.json({message: err});
    }
};

    module.exports.getAllPosts = getAllPosts;
    module.exports.getPostById = getPostById;
    module.exports.getPostByCategory=getPostByCategory;
    module.exports.createPost = createPost;
    module.exports.deletePost = deletePost;
