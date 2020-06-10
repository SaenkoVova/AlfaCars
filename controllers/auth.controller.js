const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

exports.signUp = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Не коректні дані при реєстраці"
            });
        }
        const {
            email,
            name,
            secondName,
            phone,
            country,
            area,
            city,
            index,
            address,
            newsSubscription,
            password
        } = req.body;
        const candidate = await User.findOne({email});
        if(candidate) {
            return res.status(400).json({message: 'Користувач уже існує'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            email,
            name,
            secondName,
            phone,
            country,
            area,
            city,
            index,
            address,
            newsSubscription,
            password: hashedPassword
        });
        await user.save();
        const token = jwt.sign(
            {userId: user._id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        );
        await res.json({
            token
        })

    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
}

exports.signIn = async (req, res) => {
    try {
        console.log(req.body)
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні дані при вході'
            });
        }

        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: 'Користувача не знайдено'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Невірний пароль'});
        }
        const token = jwt.sign(
            {userId: user._id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        );
        await res.json({
            token
        });
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};