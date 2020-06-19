const User = require('../models/User');
const Detail = require('../models/Detail')
const ObjectID = require('mongoose').Types.ObjectId;

exports.AddToWishlist = async (req, res) => {
    try {
        const {productId} = req.body;
        await User.findOneAndUpdate(
            {_id: ObjectID(req.user.userId)},
            { $addToSet: { bookmarks: productId}}
        );
        res.status(200).json({message: 'HELLO'});
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
};

exports.getWishList = async (req, res) => {
    try {
        const user = await User.findById({_id: req.user.userId});
        const wishList = await Detail.find({
            '_id': { $in: user.bookmarks }
        });
        res.status(200).json({
            wishList
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}

exports.removeFromWishList = async (req, res) => {
    try {
        const {productId} = req.body;
        await User.update(
            {_id: ObjectID(req.user.userId)},
            {$pull: {bookmarks: ObjectID(productId)}}
        );
        res.status(200).json({
            message: 'Оновлено'
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}