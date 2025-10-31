require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const experiencesRoutes = require('./routes/experiences');
const bookingsRoutes = require('./routes/bookings');
const promoRoutes = require('./routes/promo');

const app = express();
app.use(cors({
  origin: [
    'https://book-it-backend-2pjnpy5ar-resham-routs-projects.vercel.app', // your deployed frontend
    'http://localhost:5173'                // local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/experiences', experiencesRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/promo', promoRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/travel_db';

mongoose.connect(MONGO_URI, { autoIndex: true })
  .then(() => {
    console.log('Mongo connected');
    app.listen(PORT, () => console.log('Server running on', PORT));
  })
  .catch(err => {
    console.error('DB connection error', err);
    process.exit(1);
  });
