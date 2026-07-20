const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    transactionId: { type: String, required: true },
    amount: { type: Number, default: 1000 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
