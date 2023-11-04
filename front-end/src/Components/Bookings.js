import { useState, useEffect } from 'react';
import axios from 'axios';
import Booking from './Booking';

const API = process.env.REACT_APP_API_URL;

function Bookings() {
  
const [bookings, setBookings] = useState([]);

useEffect(() => {
    axios
      .get(`${API}/bookings`)
      .then((response) => setBookings(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(bookings)
  return (
    <div>
      <div className="booking">
        {bookings.map((booking) => {
          
          return <Booking id={booking.id} booking={booking} /> 
        })}
        </div>
      </div>
  );
}

export default Bookings