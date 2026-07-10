const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  fatherName: { type: String, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  landlineNumber: String,
  permanentAddress: { type: String, required: true },
  currentAddress: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  languages: { type: String, required: true },
  experienceType: { type: String, required: true },
  companyName: String,
  designation: String,
  currentSalary: String,
  expectedSalary: { type: String, required: true },
  noticePeriod: String,
  education: { type: String, required: true },
  jobPreference: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true },
  transactionId: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);