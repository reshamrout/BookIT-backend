const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Experience = require('../models/Experience');
const Booking = require('../models/Booking');
const Joi = require('joi');

const bookingSchema = Joi.object({
  experienceId: Joi.string().required(),
  slotId: Joi.string().required(),
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  qty: Joi.number().integer().min(1).required(),
  promo: Joi.string().allow('', null)
});


router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://book-it-frontend-rmpc85r5o-resham-routs-projects.vercel.app'); // or '*'
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});


router.post('/', async (req, res) => {
  const { error, value } = bookingSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { experienceId, slotId, name, email, qty, promo } = value;


    const exp = await Experience.findById(experienceId).session(session);
    if (!exp) {
      await session.abortTransaction();
      return res.status(404).json({ error: 'Experience not found' });
    }

    const slot = exp.slots.id(slotId);
    if (!slot) {
      await session.abortTransaction();
      return res.status(404).json({ error: 'Slot not found' });
    }

   
    const remaining = slot.capacity - slot.booked;
    if (remaining < qty) {
      await session.abortTransaction();
      return res.status(400).json({ error: 'Not enough seats available', remaining });
    }

    
    slot.booked += qty;
    await exp.save({ session });

    
    const subtotal = slot.price * qty;

    const booking = new Booking({
      experience: experienceId,
      slotId,
      name,
      email,
      qty,
      promo,
      total: subtotal
    });

    await booking.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.json({ success: true, bookingId: booking._id, total: subtotal });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error(err);
    res.status(500).json({ error: 'Server error ' + err.message });
  }
});

module.exports = router;
