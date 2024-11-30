import User from '../models/userSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/bookingSchema.js';
import Stripe from 'stripe';

export const getCheckoutSession = async (req, res) => {
  try {
    // Extract date and time slot from request body
    const { selectedDate, selectedTimeSlot } = req.body;

    // Validate date and time slot
    if (!selectedDate || !selectedTimeSlot) {
      return res.status(400).json({
        success: false,
        message: "Date and time slot are required.",
      });
    }

    // Find the doctor and user
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    if (!doctor || !user) {
      return res.status(404).json({
        success: false,
        message: "Doctor or User not found.",
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: doctor.ticketPrice * 100,
            product_data: {
              name: doctor.name,
              description: doctor.bio,
              images: [doctor.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    // Create a new booking with date and time
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
      selectedDate: new Date(selectedDate), // Ensure it's stored as a valid date
      selectedTimeSlot, // Store the time slot string
    });

    await booking.save();

    // Respond with the Stripe session URL
    res.status(200).json({
      success: true,
      message: "Checkout session created successfully",
      url: session.url,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create checkout session",
      error: error.message,
    });
  }
};
