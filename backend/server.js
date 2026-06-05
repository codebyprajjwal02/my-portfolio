require("dotenv").config({
  path: __dirname + "/.env"
});

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Startup debugging
console.log("__dirname =", __dirname);
console.log("EMAIL_USER =", JSON.stringify(process.env.EMAIL_USER));
console.log(
  "EMAIL_PASS_LENGTH =",
  process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0
);
console.log("TEST_ENV =", process.env.TEST_ENV);

// Trim accidental whitespace before creating the transporter
const EMAIL_USER = process.env.EMAIL_USER?.trim();
const EMAIL_PASS = process.env.EMAIL_PASS?.replace(/\s+/g, "");

// Verification of clean EMAIL_PASS length (should be exactly 16 characters for Gmail App Passwords)
if (EMAIL_PASS) {
  console.log("Cleaned EMAIL_PASS Length:", EMAIL_PASS.length);
  if (EMAIL_PASS.length !== 16) {
    console.warn("WARNING: EMAIL_PASS length is not exactly 16 characters. (Gmail App Passwords are 16 alphanumeric characters, e.g., abcd efgh ijkl mnop).");
  } else {
    console.log("EMAIL_PASS length verified: exactly 16 characters.");
  }
}

let transporter = null;
let isEmailConfigured = false;

// Validate SMTP credentials loaded from environment variables
if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("SMTP configuration missing. Check .env file.");
} else {
  console.log("SMTP configuration loaded successfully.");
  isEmailConfigured = true;

  // Create Nodemailer transporter with connection, greeting, and socket timeouts
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
  });
}

// Enable CORS
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"],
  credentials: true
}));

app.use(express.json());

// Helper to validate email format
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

// Helper to sanitize inputs (XSS prevention)
const sanitizeInput = (val) => {
  if (typeof val !== "string") return "";
  return val.replace(/<[^>]*>/g, "").trim();
};

// Standalone SMTP Test Route
app.get("/api/test-mail", async (req, res) => {
  if (!isEmailConfigured || !transporter) {
    return res.status(500).json({
      success: false,
      message: "SMTP configuration missing or invalid."
    });
  }

  try {
    const mailOptions = {
      from: `"${EMAIL_USER}" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      subject: "SMTP Test Mail - Portfolio Backend",
      text: "This is a direct SMTP test email sent to verify your Nodemailer configuration.",
      html: `
        <div style="font-family: sans-serif; padding: 25px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #0284c7; margin-top: 0;">SMTP Verification Connection Successful</h2>
          <p>If you are reading this message, your Gmail SMTP credentials and Nodemailer transporter are working perfectly!</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 11px; color: #64748b; font-family: monospace;">PORTFOLIO_SMTP_TEST // Secure transmission confirmed</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Test email sent successfully.",
      info: {
        messageId: info.messageId,
        envelope: info.envelope,
        response: info.response
      }
    });
  } catch (error) {
    console.error("Test Mail Dispatch Failure:", error);
    return res.status(500).json({
      success: false,
      message: "Test mail failed to send.",
      error: error.message,
      code: error.code,
      details: error
    });
  }
});

// API Route for Contact Form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Input Sanitization
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // 2. Server-side Validation
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    if (!validateEmail(sanitizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address format."
      });
    }

    // 3. SMTP Connection Check
    if (!isEmailConfigured || !transporter) {
      return res.status(500).json({
        success: false,
        message: "SMTP configuration missing."
      });
    }

    // 4. Mail Envelope Setup
    const mailOptions = {
      from: `"${sanitizedName}" <${EMAIL_USER}>`, // Sent via auth user to prevent SMTP spoofing rejection
      replyTo: sanitizedEmail, // Allows you to reply directly to recruiter's email
      to: "sprajjwalsingh230@gmail.com",
      subject: "Portfolio Contact Form - New Message",
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 25px; border: 1px solid #1e293b; border-radius: 6px; max-width: 600px; background-color: #0f172a; color: #f8fafc;">
          <h2 style="color: #38bdf8; border-bottom: 1px solid #334155; padding-bottom: 10px; margin-top: 0; font-weight: 600; letter-spacing: 0.5px;">Portfolio Contact System</h2>
          <p style="margin: 15px 0; font-size: 14px;"><strong style="color: #94a3b8;">From:</strong> ${sanitizedName}</p>
          <p style="margin: 15px 0; font-size: 14px;"><strong style="color: #94a3b8;">Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #38bdf8; text-decoration: none;">${sanitizedEmail}</a></p>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #1e293b; border-left: 4px solid #00f0ff; border-radius: 4px;">
            <span style="font-size: 10px; text-transform: uppercase; color: #64748b; font-family: monospace; display: block; margin-bottom: 5px;">[MESSAGE_PAYLOAD]</span>
            <p style="margin: 0; white-space: pre-wrap; color: #e2e8f0; line-height: 1.6; font-size: 13px;">${sanitizedMessage}</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #334155; margin: 25px 0 15px 0;" />
          <p style="font-size: 10px; color: #475569; margin: 0; text-align: center; font-family: monospace;">SECURE_SMTP_TRANSMIT_SUCCESS // © 2026 Prajjwal Kumar Singh</p>
        </div>
      `
    };

    // 5. Transmit Email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Email sent successfully."
    });

  } catch (error) {
    console.error("Nodemailer Mail Dispatch Failure:", error);
    let errorMessage = "Failed to send message. Please try again later.";
    
    if (error.code === 'EAUTH') {
      errorMessage = "Authentication failed. Please verify the server credentials.";
    } else if (error.code === 'ETIMEOUT') {
      errorMessage = "Connection to the mail server timed out. Please try again later.";
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = "Connection refused by the mail server. Please try again later.";
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
      error: error.message || "Unknown error"
    });
  }
});

// Root ping test endpoint
app.get("/", (req, res) => {
  res.send("Express Nodemailer Portfolio Contact API Server is active.");
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found."
  });
});

// Launch server
app.listen(PORT, () => {
  console.log(`Portfolio API Server listening on port ${PORT}`);
});
