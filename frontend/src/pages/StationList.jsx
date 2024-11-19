import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StationList.css';

function StationList() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Here you would typically fetch the list of stations from an API
    // For this example, we'll use dummy data
    setStations([
      { id: 1, name: 'Station A', availableBikes: 5 },
      { id: 2, name: 'Station B', availableBikes: 3 },
      { id: 3, name: 'Station C', availableBikes: 4},
    ]);
  }, []);

  return (
    <div className="station-list-container">
      <h1>Available Stations</h1>
      <ul className="station-list">
        {stations.map((station) => (
          <li key={station.id} className="station-item">
            <div className="station-info">
              <h2>{station.name}</h2>
              <p>Available Bikes: {station.availableBikes}</p>
            </div>
            {station.availableBikes > 0 && (
              <Link to={`/station/book/${station.id}`} className="book-button">
                Book a Bike
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StationList;