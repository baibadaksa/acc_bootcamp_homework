const Categories = require("../models/CategoriesModel");

const getAllCategories = async (req, res) => {
    try{
        res.json(await Categories.find());
    }catch(err){
        res.json({message: err});
    }
};

const getCategoryById = async (req, res) => {
    try{
        res.json(await Categories.findById(req.params.categoryId));
    }catch(err){
        res.json({message: err});
    }
};

module.exports.getAllCategories = getAllCategories;
module.exports.getCategoryById = getCategoryById;