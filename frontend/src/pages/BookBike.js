import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookBike.css';
import axios from "axios";

function BookBike() {
  const { stationId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async(req,res) => {
    setIsLoading(true);
    // Simulate API call
    const response=await axios.post("http://localhost:3000/api/v1/user/station/book/:id", {
          stationId:req.params.id
           })
           res.json({
            response:response
           })
    setTimeout(() => {
      alert(`Bike booked at station ${stationId}`);
      setIsLoading(false);
      navigate('/Home');
    }, 1500);
  };

  return (
    <div className="book-bike-container">
      <div className="book-bike-card">
        <h1>Book a Bike</h1>
        <p className="station-info">Station ID: {stationId}</p>
        <div className="bike-icon">🚲</div>
        <p className="booking-info">You are about to book a bike from this station.</p>
        <button 
          onClick={handleBooking} 
          className={`confirm-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Booking...' : 'Confirm Booking'}
        </button>
        <p className="terms">By booking, you agree to our terms and conditions.</p>
      </div>
    </div>
  );
}

export default BookBike;