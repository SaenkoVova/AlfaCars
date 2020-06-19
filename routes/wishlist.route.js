const {Router} = require('express');
const router = Router();
const Auth = require('../middleware/auth.middleware');
const WishListController = require('../controllers/wishlist.controller');

router.post(
    '/',
    Auth,
    WishListController.AddToWishlist
);

router.get(
    '/getwishlist',
    Auth,
    WishListController.getWishList
)

router.post(
    '/removefromwishlist',
    Auth,
    WishListController.removeFromWishList
)
module.exports = router;