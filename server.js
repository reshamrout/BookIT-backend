require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const experiencesRoutes = require('./routes/experiences');
const bookingsRoutes = require('./routes/bookings');
const promoRoutes = require('./routes/promo');

const app = express();
const allowedOrigins = [
  'https://book-it-frontend-3wmgtjdnj-resham-routs-projects.vercel.app',
  'http://localhost:3000' // for local development
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, origin);
  },
  credentials: true // Important: allow credentials
}));


app.use(express.json());
app.use(morgan('dev'));

app.use('/api/experiences', experiencesRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/promo', promoRoutes);
app.get('/', (req, res) => {
  res.send('Backend is running!');
});


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
