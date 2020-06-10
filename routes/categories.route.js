const {Router} = require('express');
const router = Router();
const CategoriesController = require('../controllers/categories.controller');

router.get(
    '/',
    CategoriesController.getCategories
);

router.get(
    '/detailscategory',
    CategoriesController.getDetailCategories
);

router.get(
    '/subdetailcategory',
    CategoriesController.getDetailSubCategories
)


module.exports = router;
