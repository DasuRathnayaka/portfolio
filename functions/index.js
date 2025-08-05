const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
require('dotenv').config();

// Configure your Gmail App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ✅ Admin email template (notification to you)
function buildAdminEmailTemplate({ name, email, message, title }) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <div style="max-width: 650px; margin: auto; background: white; border-radius: 15px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e0e0e0;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">${title}</h1>
          <h2 style="color: #4a90e2; margin: 0; font-size: 20px; font-weight: 500;">📬 Contact Form Submission</h2>
          <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #4a90e2, #64b5f6); margin: 15px auto; border-radius: 2px;"></div>
        </div>
        
        <div style="margin-bottom: 25px;">
          <p style="color: #555; font-size: 16px; line-height: 1.6;">You've received a new message via your website contact form:</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #4a90e2;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="font-weight: bold; padding: 8px 0; color: #2c3e50; font-size: 14px;">Name:</td><td style="padding: 8px 0; color: #555;">${name}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0; color: #2c3e50; font-size: 14px;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4a90e2; text-decoration: none;">${email}</a></td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0; color: #2c3e50; font-size: 14px; vertical-align: top;">Message:</td><td style="padding: 8px 0; color: #555; white-space: pre-line; line-height: 1.5;">${message}</td></tr>
          </table>
        </div>
        
        <hr style="margin: 30px 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #ddd, transparent);" />
        
        <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">
          This message was sent via your portfolio contact form on ${new Date().toLocaleDateString()}.
        </p>
      </div>
    </div>
  `;
}

// ✅ Auto-reply template (to the sender)
function buildAutoReplyTemplate({ name }) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <div style="max-width: 650px; margin: auto; background: white; border-radius: 15px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e0e0e0;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin: 0; font-size: 28px; font-weight: 700;">Hello ${name}! 👋</h1>
          <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #4a90e2, #64b5f6); margin: 15px auto; border-radius: 2px;"></div>
        </div>
        
        <div style="margin-bottom: 25px;">
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Thank you for reaching out through my portfolio! 🎉 I'm excited to hear from you and truly appreciate your interest in connecting with me.
          </p>
        </div>

        <div style="border-top: 2px solid #eee; padding-top: 25px; text-align: center;">
          <p style="margin: 0; color: #555; font-size: 16px;">Best regards,</p>
          <p style="font-weight: bold; font-size: 18px; color: #2c3e50; margin: 10px 0;">Dasuni Rathnayaka</p>
          <p style="color: #4a90e2; margin: 5px 0;">IT Undergraduate | University of Moratuwa</p>
          <p style="color: #666; margin: 5px 0;">📧 <a href="mailto:dasu.rathnayaka@gmail.com" style="color: #4a90e2; text-decoration: none;">dasu.rathnayaka@gmail.com</a></p>
          <p style="color: #666; margin: 5px 0;">📍 Colombo, Sri Lanka</p>
          
          <div style="margin-top: 15px;">
            <p style="color: #555; margin-bottom: 10px; font-size: 14px;">Let's connect:</p>
            <div style="display: inline-block;">
              <a href="https://linkedin.com/in/dasuni-rathnayaka" style="display: inline-block; margin: 0 5px; padding: 6px 12px; background: #0077B5; color: white; text-decoration: none; border-radius: 4px; font-size: 12px;">
                LinkedIn
              </a>
              <a href="https://github.com/DasuRathnayaka" style="display: inline-block; margin: 0 5px; padding: 6px 12px; background: #333; color: white; text-decoration: none; border-radius: 4px; font-size: 12px;">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr style="margin: 30px 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #ddd, transparent);" />
        
        <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">
          This is an automated confirmation email. Your message has been received and I'll respond personally soon!
        </p>
      </div>
    </div>
  `;
}

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  // Handle CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  const { name, email, message, title } = req.body;

  // Prepare admin notification email (to you)
  const adminMailOptions = {
    from: `"Website Contact" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `📨 New message from ${name}`,
    html: buildAdminEmailTemplate({ name, email, message, title }),
  };

  // Prepare auto-reply email (to sender)
  const autoReplyOptions = {
    from: `"Dasuni Rathnayaka" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}! 🌟`,
    html: buildAutoReplyTemplate({ name }),
  };

  // Send both emails in parallel
  Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(autoReplyOptions),
  ])
    .then(() => {
      console.log("✅ Emails sent successfully");
      return res.status(200).send("Email and auto-reply sent successfully");
    })
    .catch((error) => {
      console.error("❌ Error sending email:", error);
      return res.status(500).send("Failed to send email");
    });
});
