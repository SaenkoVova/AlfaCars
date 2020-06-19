const {Router} = require('express');
const router = Router();
const ReviewController = require('../controllers/review.controller');

router.post(
    '/',
    ReviewController.doReview
);

router.post(
    '/message',
    ReviewController.doMessage
)

module.exports = router;