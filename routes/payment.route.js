const Router = require('express');
const router = Router();
const PaymentController = require('../controllers/payment.controller');

router.get(
    '/',
    PaymentController.getPayments
);

module.exports = router;