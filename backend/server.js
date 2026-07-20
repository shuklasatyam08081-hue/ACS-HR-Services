const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/user");
const Job = require("./models/job");
const Contact = require("./models/contact");
const Payment = require("./models/payment");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Idea Validator Backend is Running...");
});

// API Route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Idea Validator SaaS API",
  });
});

// ===== USER REGISTRATION ROUTE =====
app.post("/api/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    
    // Create a record in Payment Collection
    const paymentRecord = await Payment.create({
      userId: user._id,
      fullName: user.fullName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      transactionId: user.transactionId,
      amount: 1000,
    });

    // Also store it in a physical file "payments.jsonl"
    const fileRecord = {
      ...paymentRecord.toObject(),
      timestamp: new Date().toISOString()
    };
    const paymentFilePath = path.join(__dirname, 'payments.jsonl');
    fs.appendFileSync(paymentFilePath, JSON.stringify(fileRecord) + '\n');

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ===== JOB ROUTES =====

// GET all jobs
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    const formattedJobs = jobs.map((job) => {
      const jobObj = job.toObject();
      jobObj.id = jobObj._id.toString();
      return jobObj;
    });
    res.json(formattedJobs);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create a new job
app.post("/api/jobs", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update a job
app.put("/api/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE a job
app.delete("/api/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ===== CONTACT ROUTE =====
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // 1. Save to Database
    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      service,
      message,
    });

    // 2. Send Email
    // Only attempt to send email if credentials are provided
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Sending to site owner
        subject: `New Contact Form Submission from ${name}`,
        text: `
You have received a new message from the contact form:

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service Interested In: ${service}

Message:
${message}
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Email credentials not configured in .env; skipping email notification.");
    }

    res.status(201).json({
      success: true,
      message: "Message received successfully",
      data: contact,
    });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    res.status(500).json({
      success: false,
      message: "Failed to process contact submission",
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});