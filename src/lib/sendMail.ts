import nodemailer from "nodemailer";

async function sendEmail(fullName: string, email: string) {
    // Create a transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Set up email data
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for reaching out!",
        text: `Hello ${fullName},\n\nI have received your message and will get back to you soon. Thank you for contacting me through my portfolio!\n\nBest regards,\nPratyush Sharma\n\nThis is an auto-generated email.`,
    };

    // Send the email
    return transporter.sendMail(mailOptions);
}

export default sendEmail;
