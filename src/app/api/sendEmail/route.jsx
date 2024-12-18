import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, subject, message, phone, service } = await req.json();
    const messageBody = 'Email: '+email+'\n'+'Phone: '+phone+'\n'+'Service: '+service+'\n'+'Message: '+message;
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use a different service if not using Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    

    await transporter.sendMail({
      from: email, // Sender address
      to: 'ashvweb@gmail.com', // Recipient address
      subject: subject || "Mail from "+firstName+' '+lastName, // Subject line
      text: messageBody, // Plain text body
    });

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Error sending email", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}