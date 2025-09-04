const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { signup, login } = require('../controllers/authController');
const { BLOOD_GROUPS, GENDERS } = require('../models/Donor');

// Registration validations
router.post(
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('mobile').matches(/^\d{10}$/).withMessage('Mobile must be 10 digits'),
    body('gender').isIn(GENDERS).withMessage('Invalid gender'),
    body('bloodGroup').isIn(BLOOD_GROUPS).withMessage('Invalid blood group'),
    body('city').trim().notEmpty().withMessage('City is required'),
    body('aadharNumber').matches(/^\d{12}$/).withMessage('Aadhaar must be 12 digits'),
    body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
  ],
  // Manual validation result handler to keep controller clean
  (req, res, next) => {
    const { validationResult } = require('express-validator');
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  signup
);

// Login with email or mobile
router.post(
  '/login',
  [
    body('emailOrMobile').notEmpty().withMessage('Email or mobile required'),
    body('password').notEmpty().withMessage('Password required')
  ],
  (req, res, next) => {
    const { validationResult } = require('express-validator');
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  login
);

module.exports = router;
