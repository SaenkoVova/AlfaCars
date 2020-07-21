const ObjectID = require('mongoose').Types.ObjectId;
const Admin = require('../models/Admin');

exports.getData = async (req, res) => {
    try {
        const user = await Admin.findOne({_id: ObjectID(req.user.userId)});
        const usersQuantity = await Admin.countDocuments();

        res.status(200).json({
            username: user.email,
            usersQuantity
        })
    } catch(e) {
        res.status(500);
    }
}