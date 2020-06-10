const Review = require('../models/Review');

exports.doReview = async (req, res) => {
    try {
        const {name, review, rating, productId} = req.body;
        const comment = new Review({
            name,
            review,
            rating,
            productId
        });
        comment.save();
        res.status(200).json({
            comment
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};