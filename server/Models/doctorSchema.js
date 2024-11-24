import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  photo : {
    type: String,
  },
   ticketPrice: {
    type: Number,
  },
  role: {
    type: String,
  },

  specialization: {
    type: String,
  },
  qualification: {
    type: Array
  },
  experinces: {
    type: Array
  },
  bio : {
    type: String,
    maxLength: 500,
  },
  about : {
    type: String,
  },
  timeSlots : {
    type: Array
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  averageRating: {
    type: Number,
    default: 0
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  appointmenst: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    }
  ]
});
export default mongoose.model("Doctor", DoctorSchema)