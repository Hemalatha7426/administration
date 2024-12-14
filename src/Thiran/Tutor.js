import React from "react";
import "./Tutor.css";

const Tutor = () => {
  return (
    <div className="tutor-profile-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.yp98A8KaJnzV1Ha8xYnduAAAAA&pid=Api&P=0&h=180"
            alt="Logo"
          />
        </div>
        <h1 className="title">Tutor Profile</h1>
        <div className="header-icons">
          <i className="fas fa-user"></i>
          <i className="fas fa-bars"></i>
        </div>
      </header>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-picture">
          <div className="profile-initials">GR</div>
        </div>
        <div className="personal-info">
          <h2>Personal Information</h2>
          <div className="info-row">
            <strong>Name:</strong>
            <p>Gayathri R</p>
          </div>
          <div className="info-row">
            <strong>College Name:</strong>
            <p>Sri Krishna College of Technology</p>
          </div>
          <div className="info-row">
            <strong>Email:</strong>
            <p>Gayathri@gmail.com</p>
          </div>
          <div className="info-row">
            <strong>Phone Number:</strong>
            <p>1234567890</p>
          </div>
          <div className="info-row">
            <strong>Address:</strong>
            <p>Coimbatore</p>
          </div>
          <div className="info-row">
            <strong>Date of Birth:</strong>
            <p>24/01/2004</p>
          </div>
          <div className="info-row">
            <strong>Graduation Year:</strong>
            <p>2020-2024</p>
          </div>
          <div className="info-row">
            <strong>Parent Mobile No:</strong>
            <p>0987654321</p>
          </div>
          <div className="info-row">
            <strong>Gender:</strong>
            <p>Female</p>
          </div>
          <div className="info-row">
            <strong>Designation:</strong>
            <p>Senior Maths Tutor</p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">Subject Taught</div>
        <div className="info-card">Experience</div>
        <div className="info-card">Volunteering Works</div>
        <div className="info-card">Achievements</div>
      </div>

      {/* Role Section */}
      <div className="role-section">
        <h2>Role: KK Tutor</h2>
        <div className="role-buttons">
          <button className="role-btn">Attendance Record</button>
          <button className="role-btn">Student Feedback</button>
          <button className="role-btn">Upcoming Classes</button>
          <button className="role-btn">Total Classes Conducted</button>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
