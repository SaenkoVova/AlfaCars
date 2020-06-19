const {Router} = require('express');
const router = Router();
const auth = require('../middleware/auth.middleware');
const UserController = require('../controllers/user.controller');

router.get(
    '/',
    auth,
    UserController.getBasicUserData
);


module.exports = router;