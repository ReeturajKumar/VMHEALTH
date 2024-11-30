import User from "../models/userSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from '../models/DoctorSchema.js'


// Updateing user details
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "User updated successfully",
        data: updatedUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to update user",
        error: error.message,
      });
  }
};


// Deleting user details
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
     await User.findByIdAndDelete(
      id,
    );

    res
      .status(200)
      .json({
        success: true,
        message: "User deleted successfully",
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete user",
        error: error.message,
      });
  }
};


// Geting Single user details
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(
      id,
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "User fetched successfully",
        data: user,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch user",
        error: error.message,
      });
  }
};


// Geting All user details
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res
      .status(200)
      .json({
        success: true,
        message: "Users fetched successfully",
        data: users,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch users",
        error: error.message,
      });
  }
};


// get UserProfile
export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { password, ...rest} = user._doc;

    res.status(200).json({
      success: true,
      message: "User profile fetched successfully",
      data: {
        ...rest
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user profile",
      error: error.message
    })
  }
}


//getting Appointments
export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId });
    const doctorIds = bookings.map((el) => el.doctor._id); // Use _id instead of id

    const doctors = await Doctor.find({ _id: { $in: doctorIds } });

    res.status(200).json({
      success: true,
      message: "Appointments fetched successfully",
      data: doctors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch appointments",
      error: error.message,
    });
  }
};
