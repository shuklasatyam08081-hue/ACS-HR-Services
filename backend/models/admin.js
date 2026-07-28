const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: { type: String, default: "admin" },
  passwordHash: { type: String, required: true },
  resetOtp: { type: String, default: null },
  resetOtpExpires: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model("Admin", AdminSchema);
