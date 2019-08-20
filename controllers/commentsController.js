const Comments = require("../models/CommentsModel");

const getCommentById = async (req, res) => {
    try{
        res.json(await Comments.findById(req.params.commentId));
    }catch(err){
        res.json({message: err});
    }
};

const createComment = async (req, res) => {
    const comment = new Comments({
        text: req.body.text
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


    module.exports.getCommentById = getCommentById;
    module.exports.createComment = createComment;
    module.exports.deleteComment = deleteComment;