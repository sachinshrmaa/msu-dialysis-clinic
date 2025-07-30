import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function GetReport() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getAppointments = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(
          "https://msu-dialysis-clinic.onrender.com/api/appointments",
          {
            withCredentials: true, 
          }
        );
        console.log(res.data);
        setAppointments(res.data?.appointments || []);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    };
    getAppointments();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Appointment Records", 14, 15);
    
    autoTable(doc, {
      startY: 20,
      head: [["Name", "Age", "Gender", "Contact", "Date"]],
      body: appointments.map((a) => [
        a?.name,
        a?.age,
        a?.gender,
        a?.contactInfo,
        a?.appointmentDate,
      ]),
    });

    doc.save("appointments.pdf");
  };

  return (
    <div className="mx-5">
      <h1 className="font-semibold text-lg my-3">Appointments</h1>

      <button
        onClick={downloadPDF}
        className="underline text-green-700 mr-3"
      >
        Download Appointment Records as PDF
      </button>

      <Link to="/" className="underline text-blue-800 ml-3">
        Back to home
      </Link>

      {isLoading && <p className="mt-7 text-center">Loading...</p>}

      <div className="grid grid-cols-4 mt-4 gap-4">
        {appointments.map((a, i) => (
          <div
            key={i}
            className="bg-slate-200 rounded p-3 hover:bg-slate-300"
          >
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
    </div>
  );
}
