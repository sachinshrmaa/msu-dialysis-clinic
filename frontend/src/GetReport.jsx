import React, { useEffect, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

export default function GetReport() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const res = await axios.get(
          "https://msu-dialysis-clinic.onrender.com/api/appointments",
          {
            withCredentails: true,
          }
        );
        console.log(res.data);
        setAppointments(res.data?.appointments);
      } catch (error) {
        console.log(error);
      }
    };
    getAppointments();
  }, []);

  // const exportPDF = (data) => {
  //   const doc = new jsPDF();
  //   const tableColumn = [
  //     "name",
  //     "email",
  //     "age",
  //     "gender",
  //     "contactInfo",
  //     "appointmentDate",
  //     "dialysisType",
  //   ];
  //   const tableRows = [];

  //   appointments.forEach((item) => {
  //     const rowData = [item.prop1, item.prop2]; // Map your data to table rows
  //     tableRows.push(rowData);
  //   });

  //   doc.autoTable(tableColumn, tableRows, { startY: 20 });
  //   doc.save("appointments.pdf");
  // };

  return (
    <div className="mx-5">
      <h1 className="font-semibold text-lg my-3">Appointments</h1>

      <Link to="/admin" className="underline text-blue-700 mr-3">
        Download Appointment Records
      </Link>

      <Link to="/" className="underline text-blue-800">
        Back to home
      </Link>

      <div className="grid grid-cols-4 mt-4 gap-4">
        {appointments.map((a) => (
          <div className="bg-slate-200 rounded p-3 hover:bg-slate-300">
            <p>
              <b>Name:</b> {a?.name}
            </p>
            <p>
              <b>Age: </b>
              {a?.age}
            </p>
            <p>
              <b>Gender: </b>
              {a?.gender}
            </p>
            <p>
              <b>Contact:</b> {a?.contactInfo}
            </p>
            <p>
              <b>Date: </b>
              {a.appointmentDate}
            </p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
