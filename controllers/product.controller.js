const Detail = require('../models/Detail');
const SubDetailCategory = require('../models/SubDetailCategory');
const ProductImage = require('../models/ProductImage');
const Review = require('../models/Review');
const { response } = require('express');


exports.getProducts = async (req, res) => {
    try {
        const subDetailCategorySlag = req.query.subDetailCategorySlag;
        const subDetailCategory = await SubDetailCategory.find({slag: subDetailCategorySlag});
        const details = await Detail.find({subDetailCategoryId: subDetailCategory[0]._id});
        res.status(200).json({
            subDetailCategorySlagTitle: subDetailCategory[0].title,
            details
        });
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
};

exports.getProductBySlag = async (req, res) => {
    try {
        const productSlag = req.query.productSlag;
        const product = await Detail.find({slag: productSlag});
        const productImages = await ProductImage.find({productId: product[0]._id});
        const reviews = await Review.find({productId: product[0]._id});
        res.status(200).json({
            product: product[0],
            productImages,
            reviews
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
    
};

exports.findByArticle = async (req, res) => {
    try {
        const {article} = req.body;
        const product = await Product.find({article});
        res.status(200).json({
            product
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}