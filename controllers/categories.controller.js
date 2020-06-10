const Car = require('../models/Car');
const CarCategory = require('../models/CarCategory');
const DetailCategory = require('../models/DetailCategory');
const SubDetailCategory = require('../models/SubDetailCategory');

exports.getCategories = async (req, res) => {
    try {
        const carCategories = await CarCategory.find();
        const cars = await Car.find();
        res.status(200).json({
            carCategories,
            cars
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
};


exports.getDetailCategories = async (req, res) => {
    try {
        const carSlag = req.query.carSlag;
        const car = await Car.find({slag: carSlag});
        const detailCategories = await DetailCategory.find({carId: car[0]._id});
        res.status(200).json({
            detailCategories
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
};

exports.getDetailSubCategories = async (req, res) => {
    try {
        const detailCategorySlag = req.query.detailCategorySlag;
        const detailCategory = await DetailCategory.find({slag: detailCategorySlag});
        const subDetailCategories = await SubDetailCategory.find({detailCategoryId: detailCategory[0]._id});
        res.status(200).json({
            subDetailCategories,
            detailCategoryTitle: detailCategory[0].title
        })
    } catch (e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}