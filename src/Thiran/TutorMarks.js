import React, { useState } from "react";
import "./TutorMarks.css";
import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js";

const TutorMarks = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", marks: 85, status: "Pass", remarks: "Excellent" },
    { id: 2, name: "Jane Smith", marks: 45, status: "Fail", remarks: "Needs Improvement" },
    { id: 3, name: "Sam Wilson", marks: 72, status: "Pass", remarks: "Good Work" },
    { id: 4, name: "Lisa Brown", marks: 90, status: "Pass", remarks: "Outstanding" },
    { id: 5, name: "Mark Lee", marks: 33, status: "Fail", remarks: "Attend Tutorials" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", marks: "", remarks: "" });
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("Maths");
  const [batch, setBatch] = useState("2023-2024");

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  const handleSubjectChange = (e) => setSubject(e.target.value);

  const handleBatchChange = (e) => setBatch(e.target.value);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search)
  );

  const handleFileUpload = () => {
    alert("File uploaded successfully!");
  };

  const handleConfirmSubmit = () => {
    alert("Marks submitted successfully!");
  };

  const handleDownload = () => {
    const element = document.getElementById("table-content");
    html2pdf().from(element).save("marks_report.pdf");
  };

  const handleNewStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.marks) {
      const status = parseInt(newStudent.marks) >= 50 ? "Pass" : "Fail";
      setStudents((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: newStudent.name,
          marks: parseInt(newStudent.marks),
          status,
          remarks: newStudent.remarks || (status === "Pass" ? "Good Work" : "Needs Improvement"),
        },
      ]);
      setNewStudent({ name: "", marks: "", remarks: "" });
    } else {
      alert("Please fill in both the name and marks fields.");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.yp98A8KaJnzV1Ha8xYnduAAAAA&pid=Api&P=0&h=180"
            alt="Logo"
          />
        </div>
        <h1 className="headline">Marks Uploading Portal</h1>
      </header>

      <div className="assign-section">
        <div>
          <label>Subject: </label>
          <select value={subject} onChange={handleSubjectChange}>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>
        </div>
        <div>
          <label>Batch: </label>
          <select value={batch} onChange={handleBatchChange}>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
          </select>
        </div>
      </div>

      <div className="upload-section">
        <input type="file" onChange={handleFileUpload} />
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search students by name..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div id="table-content">
        <table className="students-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Student Name</th>
              <th>Marks</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>
                  <input
                    type="number"
                    value={student.marks}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].marks = e.target.value;
                      updatedStudents[index].status =
                        e.target.value >= 50 ? "Pass" : "Fail";
                      setStudents(updatedStudents);
                    }}
                  />
                </td>
                <td>{student.status}</td>
                <td>
                  <input
                    type="text"
                    value={student.remarks}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].remarks = e.target.value;
                      setStudents(updatedStudents);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-student-section">
        <h3>Add New Student</h3>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={handleNewStudentChange}
        />
        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={newStudent.marks}
          onChange={handleNewStudentChange}
        />
        <input
          type="text"
          name="remarks"
          placeholder="Remarks (optional)"
          value={newStudent.remarks}
          onChange={handleNewStudentChange}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      <div className="action-buttons">
        <button onClick={handleConfirmSubmit}>Confirm And Submit</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default TutorMarks;
