import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./AttendancePage.css";

const AttendancePage = () => {
  // Move tableData to the top
  const tableData = [
    {
      id: 1,
      meeting: "Students Anchor Meeting",
      date: "2024-12-01",
      inTime: "10:00 AM",
      outTime: "01:00 PM",
      status: "Present",
      hoursPresent: "3 hrs",
      hoursAbsent: "—",
    },
    {
      id: 2,
      meeting: "Inter College Meeting",
      date: "2024-12-02",
      inTime: "09:30 AM",
      outTime: "11:00 AM",
      status: "Present",
      hoursPresent: "2 hrs",
      hoursAbsent: "—",
    },
    {
      id: 3,
      meeting: "Monthly Meeting",
      date: "2024-12-03",
      inTime: "10:00 AM",
      outTime: "01:00 PM",
      status: "Absent",
      hoursPresent: "—",
      hoursAbsent: "3 hrs",
    },
    {
      id: 4,
      meeting: "Placement Training Meeting",
      date: "2024-12-04",
      inTime: "—",
      outTime: "—",
      status: "Absent",
      hoursPresent: "—",
      hoursAbsent: "4 hrs",
    },
  ];

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = () => {
    if (!fromDate || !toDate) {
      alert("Please select both From Date and To Date");
      return;
    }

    const filtered = tableData.filter((entry) => {
      const entryDate = new Date(entry.date);
      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);
      return entryDate >= startDate && entryDate <= endDate;
    });

    setFilteredData(filtered);
  };

  const handleDownload = () => {
    const element = document.getElementById("attendance-details");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create PDF with jsPDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();

      // Adjust image dimensions to fit into PDF
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("AttendanceDetails.pdf");
    });
  };

  return (
    <div className="attendance-page" id="attendance-details">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.yp98A8KaJnzV1Ha8xYnduAAAAA&pid=Api&P=0&h=180"
            alt="Logo"
          />
        </div>
        <h1>ATTENDANCE DETAILS</h1>
      </header>

      {/* Student Info Section */}
      <div className="student-info">
        <img
          className="student-photo"
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Student"
        />
        <div className="student-details">
          <h2>Nishanth</h2>
          <p>Sri Krishna College of Technology</p>
          <p>Email</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters">
        <div className="date-picker">
          <label>From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="date-picker">
          <label>To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          <i className="fas fa-search"></i> Search
        </button>
        <button className="download-button" onClick={handleDownload}>
          <i className="fas fa-download"></i> Download
        </button>
      </div>

      {/* Attendance Table */}
      <table className="attendance-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Meeting</th>
            <th>Date</th>
            <th>In Time</th>
            <th>Out Time</th>
            <th>Status</th>
            <th>Hours Present</th>
            <th>Hours Absent</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.meeting}</td>
              <td>{row.date}</td>
              <td>{row.inTime}</td>
              <td>{row.outTime}</td>
              <td>{row.status}</td>
              <td>{row.hoursPresent}</td>
              <td>{row.hoursAbsent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
