import nodemailer from "nodemailer";

async function sendEmail(fullName: string, email: string, message: string) {
    // Create a transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Set up email data for contact Person
    const mailToPerson = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for reaching out!",
        text: `Hello ${fullName},\n\nI have received your message and will get back to you soon. Thank you for contacting me through my portfolio!\n\nBest regards,\nSumeet Pevekar\n\nThis is an auto-generated email.`,
    };
    // Set up email data for admin
    const mailToAdmin = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
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

    // Send the email
    transporter.sendMail(mailToPerson);
    transporter.sendMail(mailToAdmin);
}

export default sendEmail;
