const {Router} = require('express');
const router = Router();
const ReviewController = require('../controllers/review.controller');

router.post(
    '/',
    ReviewController.doReview
);

module.exports = router;