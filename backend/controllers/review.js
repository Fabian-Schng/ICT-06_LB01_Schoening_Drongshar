// Import function from Review Model
import { getReviews, getReviewById, insertReview, updateReviewById, deleteReviewById } from "../models/reviewModel.js";
 
// Get All Reviews
export const showReviews = (req, res) => {
    getReviews((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Review 
export const showReviewById = (req, res) => {
    getReviewById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Review
export const createReview = (req, res) => {
    const data = req.body;
    insertReview(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Review
export const updateReview = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateReviewById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Review
export const deleteReview = (req, res) => {
    const id = req.params.id;
    deleteReviewById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
