const {Router} = require('express');
const router = Router();
const ProductController = require('../controllers/product.controller');

router.get(
    '/',
    ProductController.getProducts
);

router.get(
    '/getproduct',
    ProductController.getProductBySlag
)

module.exports = router;
