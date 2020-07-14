const {Router} = require('express');
const router = Router();
const auth = require('../middleware/auth.middleware');
const UserController = require('../controllers/user.controller');
const {check} = require('express-validator');

router.get(
    '/',
    auth,
    UserController.getBasicUserData
);

router.get(
    '/order',
    auth,
    UserController.getUserDataForOrder
);

router.get(
    '/simpleedit',
    auth,
    UserController.getDataForSimpleEdit
);

router.post(
    '/simpleedit',
    auth,
    UserController.simpleEdit
);

router.post(
    '/editpassword',
    auth,
    [
        check('newPassword', 'Мінімальна довжина пароля 6 символів').isLength({min: 6})
    ],
    UserController.editPassword
)

module.exports = router;