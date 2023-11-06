import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

const BookingForm = () => {
  const [booking, setBooking] = useState({
    meeting_name: "",
    meeting_room_id: "",
    start_date: "",
    end_date: "",
    attendees: 0,
  });

  let { id } = useParams();
  let navigate= useNavigate();

  useEffect(() => {
    if (id) {
      setBooking(prevBooking => ({
        ...prevBooking,
        meeting_room_id: id 
      }));
    }
  }, [id]); 

  const handleTextChange = (event) => {
	const { name, value } = event.target;
	setBooking({ ...booking, [name]: value });
  };

  
  const addBooking = (newBooking) => {
	return axios.post(`${API}/bookings`, newBooking);
  };
  
  const handleSubmit = (event) => {
	event.preventDefault();
	addBooking(booking)
	  .then(() => {
		navigate('/bookings');
	  })
	  .catch((error) => {
		console.error(error);
		alert("There was an error creating the booking.");
	  });
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Create a New Booking</h1>
      <TextField
        label="Name"
        type="text"
        name="meeting_name"
        value={booking.meeting_name}
        onChange={handleTextChange}
        required
        style={{ width: "50%" }}
      />
      <TextField
        variant="outlined"
        type="datetime-local"
        name="start_date"
        style={{ width: "50%" }}
        value={booking.start_date}
        onChange={handleTextChange}
        required
      />
      <TextField
        variant="outlined"
        type="datetime-local"
        name="end_date"
        InputProps={{
          inputProps: { min: 0 },
        }}
        style={{ width: "50%" }}
        value={booking.end_date}
        onChange={handleTextChange}
        required
      />
      <TextField
        label="Attendees"
        variant="outlined"
        type="number"
        name="attendees"
        InputProps={{
          inputProps: { min: 0 },
        }}
        style={{ width: "50%" }}
        value={booking.attendees}
        onChange={handleTextChange}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "50%" }}
      >
        Submit
      </Button>
    </form>
  );
}

export default BookingForm;
