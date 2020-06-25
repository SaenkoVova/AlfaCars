const Suplier = require('../models/Supplier');

exports.getSupliers = async (req, res) => {
    try {
        const supliers = await Suplier.find();
        res.status(200).json({
            supliers
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}