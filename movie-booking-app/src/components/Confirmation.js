import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { formData, movie } = location.state;

  return (
    <div className="confirmation">
      <h2>Booking Confirmation</h2>
      <p>Movie: {movie.name}</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Tickets: {formData.tickets}</p>
      <p>Time: {formData.time}</p>
      <p>Date: {formData.date}</p>
      <img src={`/images/image${movie.id}.jpg`} alt={movie.name} />
    </div>
  );
};

export default Confirmation;
