import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// getting all reviews of a doctor
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    if (!reviews) {
      return res.status(404).json({
        success: false,
        message: "Reviews not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
};

// create a review
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: {
        reviews: savedReview._id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: error.message,
    });
  }
};
