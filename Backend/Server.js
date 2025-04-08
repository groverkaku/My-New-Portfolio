const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bhavargrover4@gmail.com", // ✅ YOUR Gmail
      pass: "dioaygfvwymzzxvq", // ✅ Not your login password! Use Gmail App Password
    },
  });

  const mailOptions = {
    from: `"${name}" <bhavargrover4@gmail.com>`, // Static email, but shows user's name
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
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ message: "Message sent successfully!" });
    }
  });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
