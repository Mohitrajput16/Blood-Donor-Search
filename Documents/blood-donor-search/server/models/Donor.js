const mongoose = require('mongoose');

const BLOOD_GROUPS = ['A+','A-','B+','B-','O+','O-','AB+','AB-'];
const GENDERS = ['Male','Female','Other'];

const donorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    mobile: { type: String, required: true, unique: true, index: true }, // store as string to preserve leading 0s
    gender: { type: String, enum: GENDERS, required: true },
    bloodGroup: { type: String, enum: BLOOD_GROUPS, required: true },
    city: { type: String, required: true, trim: true },
    aadharNumber: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, minlength: 6 }
  },
  { timestamps: true }
);

// Hide sensitive fields by default when converting to JSON
donorSchema.methods.toSafeObject = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.__v;
  return obj;
};

module.exports = {
  Donor: mongoose.model('Donor', donorSchema),
  BLOOD_GROUPS,
  GENDERS
};
