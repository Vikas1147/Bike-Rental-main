import React, { useState } from 'react';
import  './PredictForm.css'

function PredictForm({onClose}) {
  const [formData, setFormData] = useState({
    station_id: '',
    Hour: '',
    Month: '',
    Day: '',
    DayOfWeek: '',
    weather_sunny: false,
    weather_rainy: false,
    holidays_public_holiday: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Predict Demand</h2>
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
          <label htmlFor="Hour">Hour (0-23):</label>
          <input
            type="number"
            id="Hour"
            name="Hour"
            min="0"
            max="23"
            value={formData.Hour}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Month">Month (1-12):</label>
          <input
            type="number"
            id="Month"
            name="Month"
            min="1"
            max="12"
            value={formData.Month}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Day">Day (1-31):</label>
          <input
            type="number"
            id="Day"
            name="Day"
            min="1"
            max="31"
            value={formData.Day}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="DayOfWeek">Day of Week (0-6, 0 = Sunday):</label>
          <input
            type="number"
            id="DayOfWeek"
            name="DayOfWeek"
            min="0"
            max="6"
            value={formData.DayOfWeek}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="weather_sunny"
              checked={formData.weather_sunny}
              onChange={handleChange}
            />
            Sunny Weather
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="weather_rainy"
              checked={formData.weather_rainy}
              onChange={handleChange}
            />
            Rainy Weather
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="holidays_public_holiday"
              checked={formData.holidays_public_holiday}
              onChange={handleChange}
            />
            Public Holiday
          </label>
        </div>
        <button type="submit" className="submit-button">Predict Demand</button>
        <button onClick={onClose} className="close-button">Close</button>
      </form>
    </div>
  );
}

export default PredictForm;