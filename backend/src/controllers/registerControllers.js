import { transporter } from "../lib/mail.js";
import User from "../models/user.js";

export const registerAppointment = async (req, res) => {
  const {
    name,
    age,
    email,
    gender,
    contactInfo,
    appointmentDate,
    dialysisType,
  } = req.body;

  // handle null value
  if (
    !name ||
    !email ||
    !age ||
    !gender ||
    !contactInfo ||
    !appointmentDate ||
    !dialysisType
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check appoint already exists
  const user = await User.findOne({ email });

  if (user) {
    return res.json({ message: "User already exists" }, { status: 400 });
  }

  const newUser = new User({
    name,
    email,
    age,
    gender,
    contactInfo,
    appointmentDate,
    dialysisType,
  });

  // mailbody
  const mailOptions = {
        from: '"MSU Clinic" mail.sachinbuilds@gmail.com',
        to: email,
        subject: 'Registration Successful',
        text: `Hi ${name},\n\nThank you for registering! Your dialysis appointment has been booked successfully.\n\n- Your MSU Clinic Team`
    };

  await transporter.sendMail(mailOptions);
  const savedUser = await newUser.save();

  return res.json({
    message: "User appointment registered successfully",
    details: savedUser,
  });
};

export const getAllAppointments = async (req, res) => {
  try {
    const user = await User.find();
    return res.json({ message: "All Appointments", appointments: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
