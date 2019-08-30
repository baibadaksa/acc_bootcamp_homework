const Comments = require("../models/CommentsModel");

const getCommentsByPostId = async (req, res) => {
    try{
        res.json(await Comments.find({"postId": req.params.postId}));
    }catch(err){
        res.json({message: err});
    }
};

const createComment = async (req, res) => {
    const comment = new Comments({
        text: req.body.text,
        userId: req.body.userId,
        postId: req.body.postId
    });

    try{
        res.json(await comment.save());
    }catch(err){
        res.json({message: err});
    }
};

const deleteComment = async (req, res) => {
    try{
        res.json(await Comments.remove({ _id: req.params.commentId}))
    }catch(err){
        res.json({message: err});
    }
};


    module.exports.getCommentsByPostId = getCommentsByPostId;
    module.exports.createComment = createComment;
    module.exports.deleteComment = deleteComment;
