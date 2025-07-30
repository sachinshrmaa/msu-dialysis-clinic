import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mail.sachinbuilds@gmail.com',
        pass: 'fwgt phou qmbv xadv'
    }
});
