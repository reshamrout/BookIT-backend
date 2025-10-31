const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  capacity: { type: Number, required: true, default: 10 },
  booked: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true },
});

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String },
  longDescription: { type: String },
  image: { type: String },
  location: { type: String },
  tags: [String],
  slots: [SlotSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Experience", ExperienceSchema);
