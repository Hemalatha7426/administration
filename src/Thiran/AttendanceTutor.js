import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import * as pdfjsLib from "pdfjs-dist";
import * as XLSX from "xlsx";
import { GlobalWorkerOptions } from "pdfjs-dist";  // Import this
import "./AttendanceTutor.css";

// Set the workerSrc for pdf.js globally
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const AttendanceTutor = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: "John Doe", college: "ABC University", date: "2024-12-01", status: "Present", duration: "2h 30m", gender: "male" },
    { id: 2, name: "Jane Smith", college: "XYZ College", date: "2024-12-01", status: "Absent", duration: "0h 0m", gender: "female" },
    { id: 3, name: "Michael Brown", college: "PQR Institute", date: "2024-12-01", status: "Present", duration: "1h 45m", gender: "male" },
    { id: 4, name: "Hema", college: "DEF Academy", date: "2024-12-01", status: "Late", duration: "1h 15m", gender: "female" },
    { id: 5, name: "Chris Wilson", college: "GHI College", date: "2024-12-01", status: "Present", duration: "2h 10m", gender: "male" },
    { id: 6, name: "Anna Taylor", college: "JKL University", date: "2024-12-01", status: "Absent", duration: "0h 0m", gender: "female" },
  ]);

  const [searchDate, setSearchDate] = useState("");
  const [filteredData, setFilteredData] = useState(attendanceData);
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [file, setFile] = useState(null);

  const handleSearch = () => {
    const filtered = attendanceData.filter((record) => record.date === searchDate);
    setFilteredData(filtered);
  };

  const handleToggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const handleDownload = () => {
    const element = document.getElementById("attendance-page");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create PDF with jsPDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();

      // Adjust image dimensions to fit into PDF
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("AttendancePage.pdf");
    });
  };

  // Handle file upload (PDF)
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Check if the file is a PDF or Excel
    if (selectedFile && selectedFile.type === "application/pdf") {
      handlePdfUpload(selectedFile);
    } else if (selectedFile && selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      handleExcelUpload(selectedFile);
    } else {
      alert("Please upload a PDF or Excel file.");
    }
  };

  // Handle PDF Upload (Extract data using pdf.js)
  const handlePdfUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const typedArray = new Uint8Array(reader.result);

      // Load PDF using pdf.js
      pdfjsLib.getDocument(typedArray).promise.then((pdf) => {
        const numPages = pdf.numPages;
        let fullText = "";

        // Loop through each page and extract text
        const extractTextFromPage = (pageNum) => {
          pdf.getPage(pageNum).then((page) => {
            page.getTextContent().then((textContent) => {
              const pageText = textContent.items.map((item) => item.str).join(" ");
              fullText += pageText + "\n";

              // If it's the last page, process the text
              if (pageNum === numPages) {
                processPdfData(fullText);
              }
            });
          });
        };

        // Extract text from all pages
        for (let i = 1; i <= numPages; i++) {
          extractTextFromPage(i);
        }
      });
    };
    reader.readAsArrayBuffer(file);
  };

  // Process PDF content (Example: split by lines and map to attendance data)
  const processPdfData = (pdfText) => {
    // This example assumes that the PDF has data in a predictable format
    const lines = pdfText.split("\n");
    const newAttendanceData = lines.map((line, index) => {
      const values = line.split(" "); // Adjust this based on how the data is formatted in the PDF
      return {
        id: index + 1,
        name: values[0],
        college: values[1],
        date: values[2],
        status: values[3],
        duration: values[4],
        gender: values[5],
      };
    });

    setAttendanceData(newAttendanceData);
    setFilteredData(newAttendanceData);
  };

  // Handle Excel Upload (Extract data using XLSX library)
  const handleExcelUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0]; // Assuming first sheet
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const newAttendanceData = jsonData.map((row, index) => ({
        id: index + 1,
        name: row.Name,
        college: row.College,
        date: row.Date,
        status: row.Status,
        duration: row.Duration,
        gender: row.Gender,
      }));

      setAttendanceData(newAttendanceData);
      setFilteredData(newAttendanceData);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div id="attendance-page" className="attendance-page">
      <header className="header">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.yp98A8KaJnzV1Ha8xYnduAAAAA&pid=Api&P=0&h=180"
          alt="Logo"
          className="logo"
        />
        <h1 className="title">Attendance Tracker</h1>
      </header>

      <div className="tracker-container">
        {/* Date Filter */}
        <div className="search-section">
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="date-input"
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>

          {/* File Upload Button */}
          <input
            type="file"
            onChange={handleFileUpload}
            className="upload-input"
          />
          <button className="upload-btn">Upload PDF/Excel</button>
        </div>

        {/* Attendance Details */}
        <div className="attendance-details">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>College</th>
                <th>Date</th>
                <th>Status</th>
                <th>Duration</th>
                <th>Gender</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((record) => (
                <React.Fragment key={record.id}>
                  <tr>
                    <td>{record.id}</td>
                    <td>{record.name}</td>
                    <td>{record.college}</td>
                    <td>{record.date}</td>
                    <td>{record.status}</td>
                    <td>{record.duration}</td>
                    <td>{record.gender}</td>
                    <td>
                      <button onClick={() => handleToggleDetails(record.id)}>
                        {visibleDetails === record.id ? "Hide" : "Show"} Details
                      </button>
                    </td>
                  </tr>

                  {visibleDetails === record.id && (
                    <tr>
                      <td colSpan="8">
                        <div className="details">
                          <p>Name: {record.name}</p>
                          <p>College: {record.college}</p>
                          <p>Date: {record.date}</p>
                          <p>Status: {record.status}</p>
                          <p>Duration: {record.duration}</p>
                          <p>Gender: {record.gender}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download Button */}
        <div className="download-section">
          <button className="download-btn" onClick={handleDownload}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTutor;
