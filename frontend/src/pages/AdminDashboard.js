import React, { useState } from 'react';
import './AdminDashboard.css';
import PredictForm from './PredictForm'; // Add this lineimport PredictForm from './PredictForm'
import MaintainForm from './MaintenanceForm'

// Dummy data for stations (unchanged)
const dummyStations = [
  {
    id: 1,
    name: "Central Park Station",
    availableBikes: 15,
    totalDocks: 20,
    status: "Active",
    location: "40.7829° N, 73.9654° W",
    lastUpdated: "2023-07-30T10:30:00Z"
  },
  {
    id: 2,
    name: "Times Square Station",
    availableBikes: 8,
    totalDocks: 25,
    status: "Active",
    location: "40.7580° N, 73.9855° W",
    lastUpdated: "2023-07-30T10:28:00Z"
  },
  {
    id: 3,
    name: "Brooklyn Bridge Station",
    availableBikes: 3,
    totalDocks: 15,
    status: "Active",
    location: "40.7061° N, 73.9969° W",
    lastUpdated: "2023-07-30T10:25:00Z"
  },
  {
    id: 4,
    name: "Grand Central Station",
    availableBikes: 0,
    totalDocks: 30,
    status: "Inactive",
    location: "40.7527° N, 73.9772° W",
    lastUpdated: "2023-07-30T10:15:00Z"
  },
  {
    id: 5,
    name: "Battery Park Station",
    availableBikes: 12,
    totalDocks: 18,
    status: "Active",
    location: "40.7033° N, 74.0170° W",
    lastUpdated: "2023-07-30T10:20:00Z"
  }
];

function AdminDashboard() {
  const [showStations, setShowStations] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);
  const [showPredictForm, setShowPredictForm] = useState(false);
  const [showMaintain,setshowMaintain]=useState(false); 

  const totalStations = dummyStations.length;
  const totalBikes = dummyStations.reduce((sum, station) => sum + station.availableBikes, 0);
  const totalDocks = dummyStations.reduce((sum, station) => sum + station.totalDocks, 0);

  const handleStationsClick = () => {
    setShowStations(!showStations);
    setSelectedStation(null);
  };

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };
  const handlePredict = () => {
    setShowPredictForm(true); // Show the PredictForm when button is clicked
    setShowStations(false); // Optionally hide the stations list
    setSelectedStation(null); // Optionally clear the selected station
  };

  const handleClosePredictForm = () => {
    setShowPredictForm(false); // Hide the PredictForm
  };

  const handleMaintain = () => {
  setshowMaintain(true);//show the maintainform on click 
  };
  const handleCloseMaintainForm = () => {
    setshowMaintain(false); // Hide the PredictForm
  };



  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Bike Share Admin Dashboard</h1>
        <nav className="admin-nav">
          <button onClick={handlePredict}>Predict Demand</button>
          <button onClick={handleMaintain}>Schedule Maintenance</button>
        </nav>
      </header>
      {showPredictForm ? (
        <PredictForm onClose={handleClosePredictForm} />
      ) :(
        <>
      <div className="dashboard-overview">
        <div className="stat-card" onClick={handleStationsClick}>
          <h2>Total Stations</h2>
          <p className="stat-value">{totalStations}</p>
        </div>
        <div className="stat-card">
          <h2>Available Bikes</h2>
          <p className="stat-value">{totalBikes}</p>
        </div>
        <div className="stat-card">
          <h2>Total Docks</h2>
          <p className="stat-value">{totalDocks}</p>
        </div>
      </div>
      {showStations && (
        <section className="stations-list">
          <h2>Stations Overview</h2>
          <div className="stations-grid">
            {dummyStations.map(station => (
              <div key={station.id} className="station-card" onClick={() => handleStationClick(station)}>
                <h3>{station.name}</h3>
                <div className="station-stats">
                  <div className="stat">
                    <span className="stat-label">Available:</span>
                    <span className="stat-value">{station.availableBikes}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Total Docks:</span>
                    <span className="stat-value">{station.totalDocks}</span>
                  </div>
                </div>
                <p className={`status ${station.status.toLowerCase()}`}>{station.status}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {selectedStation && (
        <section className="station-details">
          <h2>{selectedStation.name} Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">ID:</span>
              <span className="detail-value">{selectedStation.id}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Available Bikes:</span>
              <span className="detail-value">{selectedStation.availableBikes}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Total Docks:</span>
              <span className="detail-value">{selectedStation.totalDocks}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className={`detail-value status ${selectedStation.status.toLowerCase()}`}>{selectedStation.status}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{selectedStation.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Last Updated:</span>
              <span className="detail-value">{new Date(selectedStation.lastUpdated).toLocaleString()}</span>
            </div>
          </div>
        </section>
      )}
      </>
      )}
      
      <>
      {showMaintain ? (
        <MaintainForm onClose={handleCloseMaintainForm} />
      ) :(
        <>
      <div className="dashboard-overview">
        <div className="stat-card" onClick={handleStationsClick}>
          <h2>Total Stations</h2>
          <p className="stat-value">{totalStations}</p>
        </div>
        <div className="stat-card">
          <h2>Available Bikes</h2>
          <p className="stat-value">{totalBikes}</p>
        </div>
        <div className="stat-card">
          <h2>Total Docks</h2>
          <p className="stat-value">{totalDocks}</p>
        </div>
      </div>
      {showStations && (
        <section className="stations-list">
          <h2>Stations Overview</h2>
          <div className="stations-grid">
            {dummyStations.map(station => (
              <div key={station.id} className="station-card" onClick={() => handleStationClick(station)}>
                <h3>{station.name}</h3>
                <div className="station-stats">
                  <div className="stat">
                    <span className="stat-label">Available:</span>
                    <span className="stat-value">{station.availableBikes}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Total Docks:</span>
                    <span className="stat-value">{station.totalDocks}</span>
                  </div>
                </div>
                <p className={`status ${station.status.toLowerCase()}`}>{station.status}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {selectedStation && (
        <section className="station-details">
          <h2>{selectedStation.name} Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">ID:</span>
              <span className="detail-value">{selectedStation.id}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Available Bikes:</span>
              <span className="detail-value">{selectedStation.availableBikes}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Total Docks:</span>
              <span className="detail-value">{selectedStation.totalDocks}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className={`detail-value status ${selectedStation.status.toLowerCase()}`}>{selectedStation.status}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{selectedStation.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Last Updated:</span>
              <span className="detail-value">{new Date(selectedStation.lastUpdated).toLocaleString()}</span>
            </div>
          </div>
        </section>
      )}
      </>
      )}

      </>


    </div>
  );
}

export default AdminDashboard;