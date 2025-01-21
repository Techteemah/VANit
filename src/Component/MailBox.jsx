import React, { useState } from 'react';
import "./dash.css";
import "../script2.js"
import './Mailbox.css'; 
import dee from "../../public/man.png"
import { Link } from "react-router-dom";



const MailBox = () => {



    const [emails, setEmails] = useState([
        { id: 1, subject: "Welcome to Mailbox", body: "Thank you for signing up!", date: "2025-01-15" },
        { id: 2, subject: "Order?", body: "Check your Bookings.", date: "2025-01-14" },
        { id: 3, subject: "Newsletter", body: "Here is your weekly newsletter.", date: "2025-01-13" }
      ]);
    
      const [selectedEmail, setSelectedEmail] = useState(null);
    
      const showEmail = (email) => {
        setSelectedEmail(email);
      };
    
      const backToInbox = () => {
        setSelectedEmail(null);
      };
    
      const deleteEmail = () => {
        if (selectedEmail) {
          setEmails(emails.filter(email => email.id !== selectedEmail.id));
          setSelectedEmail(null);
        }
      };
    











  return (
    <div className='top'>
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

        <main>
          

  
 
    <div className="mailbox">
      <div className="mailbox-header">Inbox</div>
      <div className="mailbox-content">
        {!selectedEmail ? (
          <ul className="email-list">
            {emails.map(email => (
              <li key={email.id} className="email-item" onClick={() => showEmail(email)}>
                <span className="subject">{email.subject}</span>
                <span className="date">{email.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="email-view">
            <div className="content">
              {selectedEmail.body}
            </div>
            <div className="actions">
              <button className="back" onClick={backToInbox}>Back to Inbox</button>
              <button className="delete" onClick={deleteEmail}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
        </main>
      </div>
    </div>
  );
};

export default MailBox;
