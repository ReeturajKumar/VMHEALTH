import User from "../Models/userSchema.js";
import Booking from "../Models/bookingSchema.js";
import Doctor from "../Models/doctorSchema.js";

// updating user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
};


// deleting User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(
      id,
    );
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
};

// get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(
      req.params.id,
    ).select("-password");
    res.status(200).json({
      success: true,
      message: "User found successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to find user",
    });
  }
};

//get all user
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Users found successfully",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};


// user profile
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

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "User profile found successfully",
      data: {...rest}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to find user profile",
    });
  }
};



export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId });

    const doctorsIds = bookings.map(el=> el.doctor.id);


    const doctors = await Doctor.find({ _id: { $in: doctorsIds } }).select("-password");

    res.status(200).json({  
      success: true,
      message: "Appointments found successfully",
      data: doctors ,
    }); 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to find appointments",
    });
  }
}

