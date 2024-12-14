import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import html2pdf from "html2pdf.js";
import "./MarksRecord.css";

const MarksRecord = () => {
  const chartRef = useRef(null);
  const [academicTerm, setAcademicTerm] = useState("");
  const [semester, setSemester] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  
  // Example data
  const results = [
    { semester: "Semester 1", term: "2023-2024", cgpa: 7.7, arrears: "Nil" },
    { semester: "Semester 2", term: "2024-2025", cgpa: 8.3, arrears: "Nil" },
    { semester: "Semester 3", term: "2024-2025", cgpa: 8.9, arrears: "Nil" },
    { semester: "Semester 4", term: "2024-2025", cgpa: 9.2, arrears: "Nil" },
    { semester: "Semester 5", term: "2024-2025", cgpa: 8.7, arrears: "1" },
    { semester: "Semester 6", term: "2024-2025", cgpa: 9.1, arrears: "Nil" },
    
  ];

  useEffect(() => {
    let chartInstance;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      chartInstance = new Chart(ctx, {
        type: "pie",
        data: {
          labels: results.map((r) => r.semester),
          datasets: [
            {
              label: "CGPA",
              data: results.map((r) => r.cgpa),
              backgroundColor: ["#4CAF50", "#2196F3", "#FF5722", "#FFC107", "#9C27B0", "#00BCD4"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, [results]);

  // Download Page as PDF
  const downloadPage = () => {
    const element = document.querySelector(".marks-record-container");
    const options = {
      margin: 1,
      filename: "marks-record.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  // Handle Search
  const handleSearch = () => {
    const filtered = results.filter((r) => {
      // If academicTerm is provided, match it with the results
      if (academicTerm.trim() === r.term) {
        if (semester.trim()) {
          return r.semester.toLowerCase().includes(semester.trim().toLowerCase());
        }
        return true;
      }
      // If no results are found, return an empty array
      return false;
    });
    setFilteredResults(filtered);
  };

  return (
    <div className="marks-record-container">
      {/* Header Section */}
      <header className="marks-header">
        <div className="logo">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.yp98A8KaJnzV1Ha8xYnduAAAAA&pid=Api&P=0&h=180"
            alt="Logo"
          />
        </div>
        <h1>Marks Record</h1>
      </header>

      {/* Student Information */}
      <div className="student-info">
        <img
          className="student-photo"
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Student"
        />
        <div className="student-details">
          <h2>Nishanth</h2>
          <p>Sri Krishna College of Technology</p>
          <p>Email: example@student.com</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters">
        <div className="date-picker">
          <label>Academic Term</label>
          <input
            type="text"
            placeholder="Enter Academic Term (e.g. 2024-2025)"
            value={academicTerm}
            onChange={(e) => setAcademicTerm(e.target.value)}
          />
        </div>
        <div className="date-picker">
          <label>Semester</label>
          <input
            type="text"
            placeholder="Enter Semester (e.g. Semester 1)"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        <button className="download-button" onClick={downloadPage}>
          Download
        </button>
      </div>

      {/* Internal Marks Table */}
      <div className="internal-marks-section">
        <h2>Internal Marks</h2>
        <table className="marks-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject Name</th>
              <th>Maximum Mark</th>
              <th>Mark Secured</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mathematical Foundation</td>
              <td>50</td>
              <td>45</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Software Design</td>
              <td>50</td>
              <td>40</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Web Technologies</td>
              <td>50</td>
              <td>42</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Operating Systems</td>
              <td>50</td>
              <td>47</td>
              <td>Pass</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Filtered Results */}
      <div className="semester-results">
        <h2>Semester Results</h2>
        <table className="semester-table">
          <thead>
            <tr>
              <th>Semester</th>
              <th>Result</th>
              <th>CGPA</th>
              <th>No. of Arrears</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.length > 0 ? (
              filteredResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.semester}</td>
                  <td>Pass</td>
                  <td>{result.cgpa}</td>
                  <td>{result.arrears}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pie Chart */}
      <div className="chart-section">
        <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default MarksRecord;
