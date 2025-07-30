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

  const savedUser = await newUser.save();
  // console.log(savedUser);

  return res.json({
    message: "User appointment registered successfully",
    details: savedUser,
  });
};

export const getAllAppointments = async (req, res) => {
  try {
    // Get all the users from the DB
    const user = await User.find();
    return res.json({ message: "All Appointments", appointments: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
