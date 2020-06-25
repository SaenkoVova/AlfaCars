const Router = require('express');
const router = Router();
const SuplierController = require('../controllers/suplier.controller');

router.get(
    '/',
    SuplierController.getSupliers
);

module.exports = router;