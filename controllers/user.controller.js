const { validationResult } = require('express-validator');
const User = require('../models/User');
const ObjectID = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

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
};

exports.getDataForSimpleEdit = async (req, res) => {
    try {
        const user = await User.findOne({_id: ObjectID(req.user.userId)});
        res.status(200).json({
            name: user.name,
            secondName: user.secondName,
            phone: user.phone,
            email: user.email
        })
    } catch(e) {
        res.status(500);
    }
}

exports.simpleEdit = async (req, res) => {
    try {
        const {name, secondName, phone, email} = req.body;
        await User.findByIdAndUpdate(
            {_id: req.user.userId},
            {
                name,
                secondName,
                phone,
                email
            }
        );
        res.status(200).json({message: 'Ваш обліковий запис успішно оновлено'});
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
}

exports.editPassword = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Не коректні дані'
            });
        }
        const {currentPassword, newPassword, confirmNewPassword} = req.body;
        if(newPassword !== confirmNewPassword) {
            return res.status(400).json({message: 'Паролі не співпадають'});
        }
        const  user = await User.findById({_id: req.user.userId});
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Невірний поточний пароль'});
        }
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        await User.findByIdAndUpdate(
            {_id: req.user.userId},
            {
                password: hashedPassword
            }
        );
        res.status(200).json({message: 'Пароль змінено'});
    } catch(e) {
        console.log(e)
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
}