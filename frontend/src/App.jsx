import React from "react";

export default function App() {
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
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">Patient Email*</p>
            <input
              type="email"
              name="email"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Patient Email"
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">Patient Age*</p>
            <input
              type="number"
              name="age"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Patient Age"
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">Patient Gender*</p>
            <select
              name="gender"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
            >
              <option name="male">Male</option>
              <option name="female">Female</option>
              <option name="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <p className="mb-1">Contact Information*</p>
            <textarea
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Patient Contact Information"
            />
          </div>

          <div className="mb-3">
            <p className="mb-1">Dialysis Type*</p>
            <select
              name="dialysis-type"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
            >
              <option name="general">General</option>
              <option name="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <p className="mb-1">Appointment Date*</p>
            <input
              type="date"
              name="appointment-date"
              className="border border-slate-400 bg-slate-50 rounded-md p-2 w-full"
              placeholder="Enter Appointment Date"
            />
          </div>
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
