const Review = require('../models/Review');
const Message = require('../models/Message');

exports.doReview = async (req, res) => {
    try {
        const {name, review, rating, productId} = req.body;
        const comment = new Review({
            name,
            review,
            rating,
            productId
        });
        await comment.save();
        res.status(200).json({
            comment
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};

exports.doMessage = async (req, res) => {
    try {
        const {name, email, message} = req.body;
        const m = new Message({
            name,
            email,
            message
        });
        await m.save();
        res.status(200).json({
            message: 'Ваше повідомлення успішно надіслано'
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
}