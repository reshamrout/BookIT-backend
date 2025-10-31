const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experience",
    required: true,
  },
  slotId: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  qty: { type: Number, required: true, min: 1 },
  promo: { type: String },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

BookingSchema.index({ experience: 1, slotId: 1, email: 1 }, { unique: false });

module.exports = mongoose.model("Booking", BookingSchema);
