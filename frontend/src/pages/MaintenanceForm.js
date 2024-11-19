import React, { useState } from 'react';

function MaintenanceForm({onClose}) {
  const [formData, setFormData] = useState({
    station_id: '',
    maintenance_type: '',
    scheduled_date: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Maintenance scheduled:', formData);
  };

  return (
    <div className="form-container">
      <h2>Schedule Maintenance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="station_id">Station ID:</label>
          <input
            type="number"
            id="station_id"
            name="station_id"
            value={formData.station_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="maintenance_type">Maintenance Type:</label>
          <select
            id="maintenance_type"
            name="maintenance_type"
            value={formData.maintenance_type}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="routine">Routine Check</option>
            <option value="repair">Repair</option>
            <option value="replacement">Part Replacement</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="scheduled_date">Scheduled Date:</label>
          <input
            type="date"
            id="scheduled_date"
            name="scheduled_date"
            value={formData.scheduled_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Schedule Maintenance</button>
        <button type="submit" onClick={onClose} className="submit-button">close</button>
      </form>
    </div>
  );
}

export default MaintenanceForm;