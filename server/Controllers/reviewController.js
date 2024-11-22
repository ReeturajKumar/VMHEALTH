import Review from '../Models/reviewSchema.js';
import Doctor from '../Models/doctorSchema.js';

// Get all reviews with optional pagination
export const getAllReview = async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Pagination parameters
  try {
    const reviews = await Review.find({})
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('doctor', 'name') // Optionally populate doctor details
      .populate('user', 'name'); // Optionally populate user details

    const total = await Review.countDocuments(); // Total reviews count

    res.status(200).json({
      success: true,
      message: "Reviews retrieved successfully",
      data: reviews,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
};

// Create a new review
export const createReview = async (req, res) => {
  try {
    // Ensure required fields are present
    if (!req.params.doctorId || !req.userId) {
      return res.status(400).json({
        success: false,
        message: "Doctor ID and User ID are required",
      });
    }

    req.body.doctor = req.params.doctorId;
    req.body.user = req.userId;

    // Save the review
    const newReview = new Review(req.body);
    const review = await newReview.save();

    // Update the associated doctor
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: review._id },
    });

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: review,
    });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add review",
      error: error.message,
    });
  }
};
