const User = require('../models/User');
const ObjectID = require('mongoose').Types.ObjectId;

exports.getBasicUserData = async (req, res) => {
    try {
        const user = await User.findOne({_id: ObjectID(req.user.userId)});
        res.status(200).json({
            bookmarks: user.bookmarks,
            name: user.name,
            secondName: user.secondName
        })
    } catch(e) {
        res.status(500);
    }
};

exports.getUserDataForOrder = async (req, res) => {
    try {
        const user = await User.findOne({_id: ObjectID(req.user.userId)});
        res.status(200).json({
            phone: user.phone,
            email: user.email,
            area: user.area,
            city: user.city,
            address: user.address,
            name: user.name,
            secondName: user.secondName
        })
    } catch(e) {
        res.status(500);
    }
}