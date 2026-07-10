const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/user");
const Job = require("./models/job");

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

// Start Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});