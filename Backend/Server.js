const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb"); //  Add MongoClient

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// ✅ MongoDB Connection
const uri = "mongodb://localhost:27017"; // Change to Atlas URI if needed
const client = new MongoClient(uri);

async function startServer() {
  try {
    await client.connect();
    console.log(" Connected to MongoDB");

    const db = client.db("portfolioDB");
    const messagesCollection = db.collection("messages");

    // 📩 POST Route for Contact Form
    app.post("/contact", async (req, res) => {
      const { name, email, phone, subject, message } = req.body;

      //  Save to MongoDB
      try {
        await messagesCollection.insertOne({
          name,
          email,
          phone,
          subject,
          message,
          date: new Date(),
        });
        console.log(" Message saved to MongoDB");
      } catch (err) {
        console.error(" Error saving to DB:", err);
      }

      //  Send Email with nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "bhavargrover4@gmail.com", // Your Gmail
          pass: "dioaygfvwymzzxvq", // Gmail App Password
        },
      });

      const mailOptions = {
        from: `"${name}" <bhavargrover4@gmail.com>`,
        to: "bhavargrover4@gmail.com",
        subject: `PORTFOLIO FORM: ${subject}`,
        text: `You got a new message:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(" Email send error:", error);
          return res.status(500).json({ message: "Failed to send email" });
        } else {
          console.log("📨 Email sent:", info.response);
          return res.status(200).json({ message: "Message sent & saved!" });
        }
      });
    });

    //  Start Express server
    app.listen(port, () => {
      console.log(` Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(" MongoDB connection error:", error);
  }
}

startServer();
