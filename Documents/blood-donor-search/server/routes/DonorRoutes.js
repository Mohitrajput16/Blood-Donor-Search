const express = require('express');
const router = express.Router();
const { listDonors, registerDonor , loginDonor } = require('../controllers/donorcontroller');

// Register donor
router.post('/register', registerDonor);
router.post('/login', loginDonor);


// Public search endpoint
router.get('/', listDonors);


module.exports = router;
