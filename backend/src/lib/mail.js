import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "in-V3.mailjet.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "no-reply@smu.edu.com",
    pass: "Tuhuh18-D",
  },
});
