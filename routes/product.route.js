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
);

router.post(
    '/findbyarticle',
    ProductController.findByArticle
)

module.exports = router;
