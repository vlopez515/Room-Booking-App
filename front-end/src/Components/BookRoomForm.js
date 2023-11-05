import React, { useState } from 'react';

const BookingForm = ({ onBookingCreated }) => {
  const [bookingData, setBookingData] = useState({
    meetingName: '',
    meetingRoomId: '', // This can also be set from a prop or from a selection
    startDate: '',
    endDate: '',
    attendees: ''
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      if (response.ok) {
        const newBooking = await response.json();
        onBookingCreated(newBooking);
      } else {
        console.error('Failed to create booking', response);
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Booking</h2>
      <div>
        <label>Meeting Name:</label>
        <input
          type="text"
          name="meetingName"
          value={bookingData.meetingName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Meeting Room ID:</label>
        <input
          type="number"
          name="meetingRoomId"
          value={bookingData.meetingRoomId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="datetime-local"
          name="startDate"
          value={bookingData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="datetime-local"
          name="endDate"
          value={bookingData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Attendees (comma-separated emails):</label>
        <input
          type="text"
          name="attendees"
          value={bookingData.attendees}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
