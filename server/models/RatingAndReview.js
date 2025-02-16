const mongoose = require("mongoose");

const ratingAndReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);
