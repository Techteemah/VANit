import React, { useState, useEffect } from 'react';
import "./dash.css";
import "../script2.js"
import cus from "../assets/male.png"
import dee from "../../public/man.png"
import { Link } from "react-router-dom";



const DriversDashboard = () => {






  const [driverName, setDriverName] = useState(''); // State to hold the driver's name

  useEffect(() => {
    // Simulating an API call to fetch driver information
    const fetchDriverInfo = async () => {
      try {
        const response = await fetch('https://vanish-backend.onrender.com/api/v1/users/driverSignup'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch driver info');
        }
        const data = await response.json();
        setDriverName(data.name); // Assuming the API returns an object with a "name" property
      } catch (error) {
        console.error('Error fetching driver info:', error);
        setDriverName('Unknown Driver'); // Fallback if the API call fails
      }
    };

    fetchDriverInfo();
  }, []); // Empty dependency array ensures this runs only once














  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <div className="sidebar">
        <div className="side-header">
          <h3>
            <sp>VN</sp>
          </h3>
        </div>

        <div className="side-content">
          <div className="profile">
            <div
              
             
            ><img src={dee}  className="profile-img bg-img"/></div>
            <h4>{driverName}</h4>
            <small>VANit Driver</small>
          </div>

          <div className="side-menu">
            <ul className="dd">
              <li className="wwn">
              <Link to="/">
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
          <div className="page-header">
            <h1>Dashboard</h1>
            <small>Home / Dashboard</small>
          </div>

          <div className="page-content">
            <div className="analytics">
              <div className="card">
                <div className="card-head">
                  <h2>0</h2>
                  <span className="las la-truck"></span>
                </div>
                <div className="card-progress">
                  <small>Total No. of Deliveries</small>
                  <div className="card-indicator">
                    <div className="indicator one" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <h2>0</h2>
                  <span className="las la-clipboard-list"></span>
                </div>
                <div className="card-progress">
                  <small>Total No. completed of Deliveries</small>
                  <div className="card-indicator">
                    <div className="indicator two" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <h2>₦0</h2>
                  <span className="las la-wallet"></span>
                </div>
                <div className="card-progress">
                  <small>Total No. of Amount earned</small>
                  <div className="card-indicator">
                    <div className="indicator three" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <h2>0</h2>
                  <span className="las la-comment-slash"></span>
                </div>
                <div className="card-progress">
                  <small>Total No. of Complains</small>
                  <div className="card-indicator">
                    <div className="indicator four" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="records table-responsive">
              <div className="record-header">
                <div className="add">
                  <span>Entries</span>
                  <select>
                    <option value="">ID</option>
                  </select>
                
                </div>

                <div className="browse">
                  <input
                    type="search"
                    placeholder="Search"
                    className="record-search"
                  />
                  <select>
                    <option value="">Status</option>
                  </select>
                </div>
              </div>

              <div>
                <table width="100%">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>
                        <span className="las la-sort"></span> CLIENT
                      </th>
                      <th>
                        <span className="las la-sort"></span> TOTAL
                      </th>
                      <th>
                        <span className="las la-sort"></span> ISSUED DATE
                      </th>
                      <th>
                        <span className="las la-sort"></span> BALANCE
                      </th>
                      <th>
                        <span className="las la-sort"></span> ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(9)].map((_, index) => (
                      <tr key={index}>
                        <td>#5033</td>
                        <td>
                          <div className="client">
                            <div
                           
                              
                            > <img src={cus}  className="client-img bg-img"/></div>
                            <div className="client-info">
                              <h4>Andrew Bruno</h4>
                              <small>bruno@crossover.org</small>
                            </div>
                          </div>
                        </td>
                        <td>$3171</td>
                        <td>19 April, 2022</td>
                        <td>{index % 2 === 0 ? "-$205" : <span className="paid">Paid</span>}</td>
                        <td>
                          <div className="actions">
                            <span className="lab la-telegram-plane"></span>
                            <span className="las la-eye"></span>
                            <span className="las la-ellipsis-v"></span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DriversDashboard;
