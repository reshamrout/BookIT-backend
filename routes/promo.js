const express = require('express');
const router = express.Router();


const PROMOS = {
  SAVE10: { type: 'percent', value: 10 },
  FLAT100: { type: 'flat', value: 100 }
};


router.post('/validate', (req, res) => {
  const { code, subtotal } = req.body;
  if (!code) return res.status(400).json({ valid: false, message: 'No code provided' });

  const promo = PROMOS[code.toUpperCase()];
  if (!promo) return res.json({ valid: false, message: 'Invalid code' });

  let discount = 0;
  if (promo.type === 'percent') discount = Math.round((promo.value / 100) * subtotal);
  else discount = promo.value;

  res.json({ valid: true, code: code.toUpperCase(), discount, newTotal: subtotal - discount });
});

module.exports = router;
