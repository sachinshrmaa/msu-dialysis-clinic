import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 255,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  dialysisType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
