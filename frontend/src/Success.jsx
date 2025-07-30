import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="text-center bg-green-100 h-[100vh]">
      <h1 className="pt-10 text-2xl mb-10 ">
        Appointment Booked Successfully!
      </h1>
      <Link to="/" className="underline text-blue-800">
        back to home
      </Link>
    </div>
  );
}
