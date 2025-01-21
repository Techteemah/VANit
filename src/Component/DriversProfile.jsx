
import React, { useState } from 'react';
import './DriversProfile.css';
import './dash.css';
import "../script2.js"
import dee from "../../public/man.png"
import { Link } from "react-router-dom";

const DriversProfile = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' });
  const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '' });
  const [preferences, setPreferences] = useState({ notifications: false, darkMode: false });

  // Handlers
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    alert(`Personal information updated:\nName: ${personalInfo.name}\nEmail: ${personalInfo.email}`);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.currentPassword && passwords.newPassword) {
      alert('Password updated successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    alert(`Preferences updated:\nNotifications: ${preferences.notifications ? 'Enabled' : 'Disabled'}\nDark Mode: ${preferences.darkMode ? 'Enabled' : 'Disabled'}`);
  };



  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <div className="sidebar">
        <div className="side-header">
          <h3>
            <sp>VT</sp>
          </h3>
        </div>

        <div className="side-content">
          <div className="profile">
            <div
              
             
            ><img src={dee}  className="profile-img bg-img"/></div>
            <h4>Ahmed Davis</h4>
            <small>VANit Driver</small>
          </div>

          <div className="side-menu">
            <ul className="dd">
              <li className="wwn">
              <Link to="/DriversDashboard">
                  <span className="las la-home"></span>
                  <small>Home</small>
                  </Link>
              </li>
              <li>
              <Link to="/DriversProfile">
                  <span className="las la-user-alt"></span>
                  <small>Profile</small>
                  </Link>
              </li>
              <li>
              <Link to="/MailBox">
                  <span className="las la-envelope"></span>
                  <small>Mailbox</small>
                  </Link>
              </li>
              <li>
              <Link to="/Order">
                  <span className="las la-truck-loading"></span>
                  <small>Orders</small>
                  </Link>
              </li>
              <li>
              <Link to="/Chat">
                  <span className="las la-comment"></span>
                  <small>Help Line</small>
                  </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <header>
          <div className="header-content">
            <label htmlFor="menu-toggle">
              <span className="las la-bars"></span>
            </label>

            <div className="header-menu">
              <label>
                <span className="las la-search"></span>
              </label>

              <div className="notify-icon">
                <span className="las la-envelope"></span>
                <span className="notify">4</span>
              </div>

              <div className="notify-icon">
                <span className="las la-bell"></span>
                <span className="notify">3</span>
              </div>

              <div className="user">
                <div
                  className="bg-img"
                  style={{ backgroundImage: "url(img/1.jpeg)" }}
                ></div>

                <span className="las la-power-off"></span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </header>

        <main className='move'>
             {/* Personal Information Section */}
        <section className="profile-info">
          <h2>Personal Information</h2>
          <form onSubmit={handlePersonalInfoSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={personalInfo.name}
              onChange={handlePersonalInfoChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={personalInfo.email}
              onChange={handlePersonalInfoChange}
              required
            />

            <button type="submit">Save Changes</button>
          </form>
        </section>

        {/* Password Section */}
        <section className="password-section">
          <h2>Change Password</h2>
          <form onSubmit={handlePasswordSubmit}>
            <label htmlFor="current-password">Current Password</label>
            <input
              type="password"
              id="current-password"
              name="currentPassword"
              placeholder="Enter current password"
              value={passwords.currentPassword}
              onChange={handlePasswordChange}
              required
            />

            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              name="newPassword"
              placeholder="Enter new password"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
              required
            />

            <button type="submit">Update Password</button>
          </form>
        </section>

        {/* Preferences Section */}
        <section className="preferences-section">
          <h2>Preferences</h2>
          <form onSubmit={handlePreferencesSubmit}>
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={preferences.notifications}
                onChange={handlePreferencesChange}
              />
              Enable Notifications
            </label>
            <label>
              <input
                type="checkbox"
                name="darkMode"
                checked={preferences.darkMode}
                onChange={handlePreferencesChange}
              />
              Dark Mode
            </label>
            <button type="submit">Save Preferences</button>
          </form>
        </section>
        </main>
      </div>
    </div>
  );
};

export default DriversProfile;
