// import express
import express from "express";

// import function from controller
import { showBooks, showReviews, showReviewById, createReview, updateReview, deleteReview } from "../controllers/review.js";

// init express router
const router = express.Router();

// Get All Books
router.get('/books', showBooks);

// Get All Reviews
router.get('/reviews', showReviews);

// Get Single Review
router.get('/reviews/:id', showReviewById);

// Create New Review
router.post('/reviews', createReview);

// Update Review
router.put('/reviews/:id', updateReview);

// Delete Review
router.delete('/reviews/:id', deleteReview);

// export default router
export default router;
