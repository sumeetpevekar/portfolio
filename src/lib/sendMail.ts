import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const EMAIL_USER = process.env.EMAIL_USER;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendEmail(fullName: string, email: string, message: string) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: EMAIL_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token!,
            },
        });

        const mailOptions = {
            from: EMAIL_USER,
            to: email,
            subject: "Thank you for reaching out!",
            text: `Hello ${fullName},\n\nI have received your message and will get back to you soon.\n\nBest regards,\nSumeet Pevekar\n\nThis is an auto-generated email.`,
        };

        const mailOptions2 = {
            from: EMAIL_USER,
            to: EMAIL_USER,
            subject: `📩 New Contact Inquiry from ${fullName}`,
            text: `🔔 You have received a new contact request! 

📌 **Sender Details:**  
👤 Name: ${fullName}  
📧 Email: ${email}  

📝 **Message:**  
${message}

📅 Timestamp: ${new Date().toLocaleString()}

🔗 Please respond at your earliest convenience.

Best,  
Your Portfolio Contact System
`,
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptions2);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

export default sendEmail;
