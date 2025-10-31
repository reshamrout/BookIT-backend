const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://book-it-frontend-rmpc85r5o-resham-routs-projects.vercel.app'); // or '*'
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});


router.get('/', async (req, res) => {
  try {
    const exps = await Experience.find().lean();
    res.json(exps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id).lean();
    if (!exp) return res.status(404).json({ error: 'Not found' });


    exp.slots = exp.slots.map(s => ({
      ...s,
      remaining: s.capacity - s.booked
    }));
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
