const Admin = require('../models/Admin');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

exports.signIn = async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні дані при вході'
            });
        }

        const {email, password} = req.body;
        console.log(password)
        const admin = await Admin.findOne({email});
        if(!admin) {
            return res.status(400).json({message: 'Користувача не знайдено'});
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Невірний пароль'});
        }
        const token = jwt.sign(
            {userId: admin._id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        );
        await res.json({
            token
        });
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
}
exports.signUp = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Не коректні дані при реєстраці"
            });
        }
        const {email, password} = req.body;
        console.log(password)
        const candidate = await Admin.findOne({email});
        if(candidate) {
            return res.status(400).json({message: 'Користувач уже існує'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const admin = new Admin({
            email,
            password: hashedPassword
        });
        await admin.save();
        const token = jwt.sign(
            {userId: admin._id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        );
        await res.json({
            token
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
}