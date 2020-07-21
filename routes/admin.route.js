const {Router} = require('express');
const router = Router();
const AdminAuthController = require('../controllers/adminAuth.controller');
const AdminController = require('../controllers/admin.controller');
const AuthMiddleware = require('../middleware/auth.middleware');
const {check} = require('express-validator');

router.post(
    '/signin',
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна довжина пароля 6 символів').isLength({min: 6})
    ],
    AdminAuthController.signIn
);

router.post(
    '/signup',
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна довжина пароля 6 символів').isLength({min: 6})
    ],
    AdminAuthController.signUp
);

router.get(
    '/getdata',
    AuthMiddleware,
    AdminController.getData
)

module.exports = router;
