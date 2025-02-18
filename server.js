import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Email yuborish uchun konfiguratsiya
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "suxrobamirov00@gmail.com@gmail.com", // O'zingizning emailingiz
        pass: "SUHROB05" // Gmail App Password (2FA yoqilgan bo‘lishi kerak)
    }
});

app.post("/send-email", async (req, res) => {
    const { name, phone, email, timeline, soha, details } = req.body;

    try {
        await transporter.sendMail({
            from: email, // Mijozning emailingizdan sizga jo‘natilgan sifatida ko‘rinadi
            to: "suxrobamirov00@gmail.com", // Sizning emailingiz (kimga yuboriladi)
            replyTo: email, // Mijozning emailiga javob qaytarish uchun
            subject: "New Contact Form Submission",
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Timeline: ${timeline}
                Field: ${soha}
                Message: ${details}
            `
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
