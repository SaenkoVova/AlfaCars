const User = require('../models/User');
const ObjectID = require('mongoose').Types.ObjectId;

exports.getBasicUserData = async (req, res) => {
    try {
        const user = await User.findOne({_id: ObjectID(req.user.userId)});
        res.status(200).json({
            username: user.name,
            bookmarks: user.bookmarks,
            name: user.name,
            secondName: user.secondName
        })
    } catch(e) {
        res.status(500);
    }
};
