import React, { useState } from 'react';

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
];

function DashboardHome() {
  const [showStations, setShowStations] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

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

  return (
    <div>
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
    </div>
  );
}

export default DashboardHome;