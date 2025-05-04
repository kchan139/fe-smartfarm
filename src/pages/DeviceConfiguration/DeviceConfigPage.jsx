import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../component/Sidebar/Sidebar';
import Header from '../../component/Header/Header';
import { isAuthenticated } from '../../utils/auth';
import './DeviceConfigPage.css';

function DeviceConfigPage() {
  const navigate = useNavigate();
  const [showEntries, setShowEntries] = useState(10);

  useEffect(() => {
    const checkAuthentication = () => {
      if (!isAuthenticated()) {
        navigate('/login');
      }
    }
    checkAuthentication();
  }, [navigate]);

  const handleShowEntriesChange = (event) => {
    setShowEntries(parseInt(event.target.value, 10));
  };

  return (
    <>
      <div className="device-config-page">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="device-config-container">
            <div className="table-controls">
              <div className="show-entries">
                <span>Show</span>
                <select value={showEntries} onChange={handleShowEntriesChange}>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span>entries</span>
              </div>
              <div className="search-input">
                <input type="text" placeholder="Search..." />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            <div className="device-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Room</th>
                    <th>Latest update</th>
                    <th>Label</th>
                    <th>State</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows will go here */}
                  {/* Example Row based on image */}
                  <tr>
                    <td>#20462</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      1.pdf
                    </td>
                    <td>1</td>
                    <td>13/05/2022</td>
                    <td>light</td>
                    <td><span className="status-active">Active</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#18933</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      2.pdf
                    </td>
                    <td>2</td>
                    <td>22/05/2022</td>
                    <td>tap</td>
                    <td><span className="status-inactive">InActive</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#45169</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      3.pdf
                    </td>
                    <td>1</td>
                    <td>15/06/2022</td>
                    <td>sensor</td>
                    <td><span className="status-inactive">InActive</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#34304</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      4.pdf
                    </td>
                    <td>3</td>
                    <td>06/09/2022</td>
                    <td>sensor</td>
                    <td><span className="status-active">Active</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#17188</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      5.pdf
                    </td>
                    <td>1</td>
                    <td>25/09/2022</td>
                    <td>sensor</td>
                    <td><span className="status-inactive">InActive</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#73003</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      6.pdf
                    </td>
                    <td>2</td>
                    <td>04/10/2022</td>
                    <td>...</td>
                    <td><span className="status-active">Active</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#58825</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      7.pdf
                    </td>
                    <td>1</td>
                    <td>17/10/2022</td>
                    <td>...</td>
                    <td><span className="status-active">Active</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#44122</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      8.pdf
                    </td>
                    <td>3</td>
                    <td>24/10/2022</td>
                    <td>...</td>
                    <td><span className="status-active">Active</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                   <tr>
                    <td>#89094</td>
                    <td>
                      <img src="https://via.placeholder.com/30" alt="Device" width="30" height="30" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                      9pdf
                    </td>
                    <td>2</td>
                    <td>01/11/2022</td>
                    <td>...</td>
                    <td><span className="status-inactive">InActive</span></td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', marginRight: '10px'}}>
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <button>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeviceConfigPage;