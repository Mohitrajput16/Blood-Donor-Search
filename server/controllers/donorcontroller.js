const { Donor } = require('../models/Donor');


// const Donor = require('../models/donorModel');

// Register donor
const registerDonor = async (req, res) => {
  try {
    const { name, email, mobile, gender, bloodGroup, city, aadharNumber, password } = req.body;

    // Check if donor already exists
    const existing = await Donor.findOne({ $or: [{ email }, { mobile }, { aadharNumber }] });
    if (existing) {
      return res.status(400).json({ message: 'Donor already registered with email/mobile/aadhar' });
    }

    // In registerDonor function
const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
const donor = new Donor({
    name,
    email,
    mobile,
    gender,
    bloodGroup,
    city,
    aadharNumber,
    password: hashedPassword // Store the hashed password
});
await donor.save();

    res.status(201).json({ message: 'Donor registered successfully', donor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// const Donor = require('../models/donorModel');
const bcrypt = require('bcryptjs');

const loginDonor = async (req, res) => {
  try {
    const { emailOrMobile, password } = req.body;

    const donor = await Donor.findOne({
      $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }]
    });

    if (!donor) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, donor.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', donor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};



const listDonors = async (req, res) => {
  try {
    const { gender, city, bloodGroup } = req.query;
    const filter = {};

    if (gender) filter.gender = gender;
    if (bloodGroup) filter.bloodGroup = bloodGroup;
    if (city) filter.city = new RegExp(`^${city}$`, 'i'); // case-insensitive exact city

    // Exclude password & Aadhaar from results
    const donors = await Donor.find(filter).select('-password -aadharNumber -__v').sort({ createdAt: -1 });
    res.json(donors);
  } catch (err) {
    console.error('List donors error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerDonor,listDonors,loginDonor };

