// import connection
import db from "../config/database.js";
 
// Get All Reviews
export const getReviews = (result) => {
    db.query("SELECT * FROM book_review_v", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Review
export const getReviewById = (id, result) => {
    db.query("SELECT * FROM book_review_v WHERE review_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Review to Database
export const insertReview = (data, result) => {
    db.query("INSERT INTO book_review SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Review to Database
export const updateReviewById = (data, id, result) => {
    db.query("UPDATE book_review SET review_text = ? WHERE review_id = ?", [data.review_text, data.review_id, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Review to Database
export const deleteReviewById = (id, result) => {
    db.query("DELETE FROM book_review WHERE review_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
