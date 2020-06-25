const {Router} = require('express');
const router = Router();
const auth = require('../middleware/auth.middleware');
const UserController = require('../controllers/user.controller');

router.get(
    '/',
    auth,
    UserController.getBasicUserData
);

router.get(
    '/order',
    auth,
    UserController.getUserDataForOrder
)


module.exports = router;