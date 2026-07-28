const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/user");
const Job = require("./models/job");
const Contact = require("./models/contact");
const Payment = require("./models/payment");
const Admin = require("./models/admin");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Seed default admin function
const seedAdmin = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const defaultPassword = "admin123";
      const hash = crypto.createHash("sha256").update(defaultPassword).digest("hex");
      await Admin.create({
        username: "admin",
        passwordHash: hash
      });
      console.log("ℹ️ Default admin seeded (username: admin, password: admin123)");
    }
  } catch (err) {
    console.error("❌ Error seeding admin:", err.message);
  }
};

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");
    await seedAdmin();
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 ACS HR Services Backend is Running...");
});

// API Route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the ACS HR Services API",
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

    // Send Email Notification to Admin
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== "your_app_password") {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Sending to admin
          subject: `New Job Seeker Registration: ${user.fullName} (${user.jobPreference})`,
          text: `
New registration received on ACS HR Services!

--- Personal & Contact Details ---
Name: ${user.fullName}
Father's Name: ${user.fatherName}
Email: ${user.email}
Phone: ${user.mobileNumber}
Gender: ${user.gender}
Marital Status: ${user.maritalStatus}
Languages: ${user.languages}
Permanent Address: ${user.permanentAddress}

--- Professional Details ---
Education/Qualification: ${user.education}
Job Preference (Field): ${user.jobPreference}
Experience Type: ${user.experienceType}
Current Designation: ${user.designation || 'N/A'}
Current Company: ${user.companyName || 'N/A'}
Current Salary: ${user.currentSalary || 'N/A'}
Expected Salary: ${user.expectedSalary}
Notice Period: ${user.noticePeriod || 'N/A'}

--- Payment & Verification ---
Transaction ID: ${user.transactionId}

Please check your MongoDB Atlas Database for the complete details.
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailErr) {
        console.error("Failed to send registration email notification:", emailErr.message);
      }
    }

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
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== "your_app_password") {
      try {
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
      } catch (emailErr) {
        console.error("Failed to send email notification:", emailErr.message);
        // We still continue and return success because the contact was saved to DB
      }
    } else {
      console.warn("Email credentials not configured or using default in .env; skipping email notification.");
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

// ===== ADMIN AUTHENTICATION ROUTES =====

// Admin Login
app.post("/api/admin/login", async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ success: false, message: "Password is required" });
    }
    const admin = await Admin.findOne({ username: "admin" });
    if (!admin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }
    const hash = crypto.createHash("sha256").update(password).digest("hex");
    if (admin.passwordHash === hash) {
      res.json({ success: true, message: "Authenticated successfully" });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin Forgot Password (Request OTP via Email)
app.post("/api/admin/forgot-password", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: "admin" });
    if (!admin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    // Generate a secure 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    admin.resetOtp = otp;
    admin.resetOtpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
    await admin.save();

    // Send OTP to admin email (EMAIL_USER)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== "your_app_password") {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Sends to self/admin
          subject: "ACS HR Services - Admin Password Reset OTP",
          text: `
Hello Admin,

A request has been made to reset the Admin Password for ACS HR Services.

Your 6-digit OTP is: ${otp}

This OTP is valid for 10 minutes. If you did not request this, please ignore this email.
          `,
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "OTP sent to your email successfully" });
      } catch (emailErr) {
        console.error("Failed to send OTP email:", emailErr.message);
        res.status(500).json({ success: false, message: "Failed to send OTP email" });
      }
    } else {
      // Dev mode fallback: Return OTP in console/response if email is unconfigured
      console.warn("Email credentials not configured; returning OTP in response (Development Mode):", otp);
      res.json({ 
        success: true, 
        message: "Email credentials not configured in .env. (Dev Mode OTP): " + otp,
        otp: otp 
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin Reset Password (Verify OTP & Update Password)
app.post("/api/admin/reset-password", async (req, res) => {
  try {
    const { otp, newPassword } = req.body;
    if (!otp || !newPassword) {
      return res.status(400).json({ success: false, message: "OTP and new password are required" });
    }

    const admin = await Admin.findOne({
      username: "admin",
      resetOtp: otp,
      resetOtpExpires: { $gt: Date.now() }
    });

    if (!admin) {
      return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
    }

    // Set new password
    admin.passwordHash = crypto.createHash("sha256").update(newPassword).digest("hex");
    admin.resetOtp = null;
    admin.resetOtpExpires = null;
    await admin.save();

    res.json({ success: true, message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});