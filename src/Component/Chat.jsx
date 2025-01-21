
import "./dash.css";
import "../script2.js"

import dee from "../../public/man.png"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Chat.css';


const Chat = () => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        setMessages([...messages, message]);
        setMessage('');
      }
    };
  


  return (
    <div className="side">
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
 



 
    <div className="chat-container1">
      <div className="chat-box1">
        <div className="messages1">
          {messages.map((msg, index) => (
            <div className="message1" key={index}>
              <span>{msg}</span>
            </div>
          ))}
        </div>
        <div className="input-container1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button1 onClick={handleSendMessage}>Send</button1>
        </div>
      </div>
    </div>
 


        </main>
      </div>
    </div>
  );
};

export default Chat;
