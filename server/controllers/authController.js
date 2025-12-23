const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Donor } = require('../models/Donor');

const signup = async (req, res) => {
  try {
    const { name, email, mobile, gender, bloodGroup, city, aadharNumber, password } = req.body;

    // Check duplicates (email or mobile or aadhar)
    const existing = await Donor.findOne({
      $or: [{ email: email.toLowerCase() }, { mobile }, { aadharNumber }]
    });
    if (existing) {
      return res.status(400).json({
        message: 'Donor already exists with same email/mobile/Aadhaar'
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const donor = await Donor.create({
      name,
      email: email.toLowerCase(),
      mobile,
      gender,
      bloodGroup,
      city,
      aadharNumber,
      password: hashed
    });

    return res.status(201).json({ donor: donor.toSafeObject() });
  } catch (err) {
    // Handle unique index collisions gracefully
    if (err && err.code === 11000) {
      return res.status(400).json({ message: 'Duplicate field: ' + Object.keys(err.keyPattern).join(', ') });
    }
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    const { emailOrMobile, password } = req.body;

    const donor = await Donor.findOne({
      $or: [{ email: (emailOrMobile || '').toLowerCase() }, { mobile: emailOrMobile }]
    });
    if (!donor) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, donor.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: donor._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token, donor: donor.toSafeObject() });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signup, login };
