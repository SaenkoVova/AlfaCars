const Payment = require('../models/Payment');

exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json({
            payments
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}