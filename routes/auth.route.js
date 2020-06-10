const {Router} = require('express');
const router = Router();
const AuthController = require('../controllers/auth.controller');
const {check} = require('express-validator');

router.post(
    '/signup',
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна довжина пароля 6 символів').isLength({min: 6})
    ],
    AuthController.signUp
);

router.post(
    '/signin',
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна довжина пароля 6 символів').isLength({min: 6})
    ],
    AuthController.signIn
);

router.get(
    '/getuser',
    
)

module.exports = router;
