import React, { useState } from 'react';
import "./custom.css"
import "../script.js"



const ProfileSettings = () => {
  const [username, setUsername] = useState('nmaxwell');
  const [name, setName] = useState('Nelle Maxwell');
  const [email, setEmail] = useState('nmaxwell@mail.com');
  const [company, setCompany] = useState('Company Ltd.');
  const [bio, setBio] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.'
  );
  const [birthday, setBirthday] = useState('May 3, 1995');
  const [country, setCountry] = useState('Canada');
  const [phone, setPhone] = useState('+0 (123) 456 7891');
  const [website, setWebsite] = useState('');
  const [socialLinks, setSocialLinks] = useState({
    twitter: 'https://twitter.com/user',
    facebook: 'https://www.facebook.com/user',
    googlePlus: '',
    linkedIn: '',
    instagram: 'https://www.instagram.com/user',
  });
  const [isEmailNotificationsEnabled, setEmailNotificationsEnabled] = useState(true);
  const [isAppNotificationsEnabled, setAppNotificationsEnabled] = useState(true);
  const [currentTab, setCurrentTab] = useState('account-general');

  const handleTabChange = (tabId) => {
    setCurrentTab(tabId);
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files);
  };

  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Profile Settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a
                className={`list-group-item list-group-item-action ${currentTab === 'account-general' ? 'active' : ''}`}
                onClick={() => handleTabChange('account-general')}
              >
                General
              </a>
              <a
                className={`list-group-item list-group-item-action ${currentTab === 'account-change-password' ? 'active' : ''}`}
                onClick={() => handleTabChange('account-change-password')}
              >
                Change password
              </a>
              <a
                className={`list-group-item list-group-item-action ${currentTab === 'account-info' ? 'active' : ''}`}
                onClick={() => handleTabChange('account-info')}
              >
                Info
              </a>
              <a
                className={`list-group-item list-group-item-action ${currentTab === 'account-social-links' ? 'active' : ''}`}
                onClick={() => handleTabChange('account-social-links')}
              >
                Social links
              </a>
              <a
                className={`list-group-item list-group-item-action ${currentTab === 'account-connections' ? 'active' : ''}`}
                onClick={() => handleTabChange('account-connections')}
              >
                Connections
              </a>
              <a
                className={`list-group-item list-group-item-action ${currentTab === 'account-notifications' ? 'active' : ''}`}
                onClick={() => handleTabChange('account-notifications')}
              >
                Notifications
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              {/* General Tab */}
              <div className={`tab-pane fade ${currentTab === 'account-general' ? 'active show' : ''}`} id="account-general">
                <div className="card-body media align-items-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    className="d-block ui-w-80"
                  />
                  <div className="media-body ml-4">
                    <label className="upl">
                      Upload new photo
                      <input type="file" className="account-settings-fileinput" onChange={handleFileUpload} />
                    </label>
                    <button type="button" className="btn btn-default md-btn-flat">
                      Reset
                    </button>
                    <div className="text-light small mt-1">
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </div>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="javascript:void(0)">Resend confirmation</a>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={9046058175}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Change Password Tab */}
              <div className={`tab-pane fade ${currentTab === 'account-change-password' ? 'active show' : ''}`} id="account-change-password">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </div>

              {/* Info Tab */}
              <div className={`tab-pane fade ${currentTab === 'account-info' ? 'active show' : ''}`} id="account-info">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Birthday</label>
                    <input
                      type="text"
                      className="form-control"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select
                      className="custom-select"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option>USA</option>
                      <option selected>Canada</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Contacts</h6>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Website</label>
                    <input
                      type="text"
                      className="form-control"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Social Links Tab */}
              <div className={`tab-pane fade ${currentTab === 'account-social-links' ? 'active show' : ''}`} id="account-social-links">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialLinks.twitter}
                      onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialLinks.facebook}
                      onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Google+</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialLinks.googlePlus}
                      onChange={(e) => setSocialLinks({ ...socialLinks, googlePlus: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialLinks.linkedIn}
                      onChange={(e) => setSocialLinks({ ...socialLinks, linkedIn: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialLinks.instagram}
                      onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Notifications Tab */}
              <div className={`tab-pane fade ${currentTab === 'account-notifications' ? 'active show' : ''}`} id="account-notifications">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        checked={isEmailNotificationsEnabled}
                        onChange={() => setEmailNotificationsEnabled(!isEmailNotificationsEnabled)}
                      />
                      <label className="custom-control-label">Enable email notifications</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        checked={isAppNotificationsEnabled}
                        onChange={() => setAppNotificationsEnabled(!isAppNotificationsEnabled)}
                      />
                      <label className="custom-control-label">Enable app notifications</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connections Tab */}
              <div className={`tab-pane fade ${currentTab === 'account-connections' ? 'active show' : ''}`} id="account-connections">
                <div className="card-body">
                  {/* Add any relevant connection settings here */}
                  <p>Manage your connections settings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button type="button"  className="ttt">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
