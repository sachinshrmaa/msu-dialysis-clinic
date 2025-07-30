import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
    contactInfo: "",
    appointmentDate: "",
    dialysisType: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/register",
        formData,
        { withCredentials: true }
      );
      console.log(res);
      setIsLoading(false);
      navigate("/success");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-7 text-2xl font-semibold">
        MSU Dialysis Clinic Registeration
      </h1>

      <div className="bg-blue-100 w-[500px] rounded-lg p-5 mx-auto mt-[40px] border border-blue-900">
        <form>
          <div className="mb-3">
            <p className="mb-1">Patient Name*</p>
            <input
              type="text"
              name="name"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full "
              placeholder="Enter Patient Name"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">Patient Email*</p>
            <input
              type="email"
              name="email"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Patient Email"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">Patient Age*</p>
            <input
              type="number"
              name="age"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Patient Age"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  age: e.target.value,
                }));
              }}
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">Patient Gender*</p>
            <select
              name="gender"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  gender: e.target.value,
                }));
              }}
            >
              <option name="other">Gender</option>
              <option name="male">Male</option>
              <option name="female">Female</option>
            </select>
          </div>

          <div className="mb-3">
            <p className="mb-1">Contact Information*</p>
            <textarea
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Patient Contact Information"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  contactInfo: e.target.value,
                }));
              }}
            />
          </div>

          <div className="mb-3">
            <p className="mb-1">Dialysis Type*</p>
            <select
              name="dialysis-type"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  dialysisType: e.target.value,
                }));
              }}
            >
              <option name="other">Type</option>
              <option name="general">General</option>
            </select>
          </div>

          <div className="mb-3">
            <p className="mb-1">Appointment Date*</p>
            <input
              type="date"
              name="appointment-date"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Appointment Date"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  appointmentDate: e.target.value,
                }));
              }}
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-blue-800 text-white p-2 rounded px-6"
          >
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </form>
      </div>

      <div className="text-center mt-7">
        <p className="text-center text-slate-600">MSU Dialysis Clinic 2025</p>

        <a href="#" className="text-blue-700 underline mr-4">
          Contact
        </a>
        <a href="#" className="text-blue-700 underline mr-4">
          About
        </a>
      </div>
    </div>
  );
}
