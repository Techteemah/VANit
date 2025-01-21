
import "./dash.css";
import "../script2.js"

import dee from "../../public/man.png"
import { Link } from "react-router-dom";
import './Order.css';
import React, { useState } from 'react';
import JobList from './JobList';

const Order = () => {


    const [jobs] = useState([
        { id: 1, name: 'Michael Nguyen', phone: '0903001276', from: 'Lagos', to: 'Ogun' },
        { id: 2, name: 'Loki Bright', phone: '0903001276', from: 'Lagos', to: 'Ogun' },
        { id: 3, name: 'Michael Nguyen', phone: '0903001276', from: 'Lagos', to: 'Ogun' },
      ]);
      const [search, setSearch] = useState('');
    
      const filteredJobs = jobs.filter((job) =>
        job.name.toLowerCase().includes(search.toLowerCase())
      );
    






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

        <main>
          

 
 
    <div className="dashboard">
      <h1>Jobs</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <JobList jobs={filteredJobs} />
    </div>



        </main>
      </div>
    </div>
  );
};

export default Order;
