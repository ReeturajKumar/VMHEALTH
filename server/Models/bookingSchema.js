import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    selectedDate: {
      type: Date, // Store the date as a valid Date object
      required: true,
    },
    selectedTimeSlot: {
      type: String, // Store the time slot as a string (e.g., "10:00 AM - 11:00 AM")
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "doctor",
    select: "name rating", // Note: Removed comma; use space or destructuring
  });
  next();
});

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
