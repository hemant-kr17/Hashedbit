import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movie } = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: '',
    time: '',
    date: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/confirmation', { state: { formData, movie } });
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Tickets:</label>
        <input
          type="number"
          name="tickets"
          value={formData.tickets}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
        <label>Time:</label>
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">Select Time</option>
          <option value="10am">10:00 AM</option>
          <option value="1pm">1:00 PM</option>
          <option value="4pm">4:00 PM</option>
          <option value="7pm">7:00 PM</option>
          <option value="10pm">10:00 PM</option>
        </select>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
