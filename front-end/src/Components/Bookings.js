import { useState, useEffect } from "react";
import axios from "axios";
import Booking from "./Booking";
import List from "@mui/material/List";

const API = process.env.REACT_APP_API_URL;

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/bookings`)
      .then((response) => setBookings(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(bookings);
  return (
    <div>
      <div className="booking">
        {bookings.map((booking) => {
          return (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <Booking key={booking.id} booking={booking} />
            </List>
          );
        })}
      </div>
    </div>
  );
}

export default Bookings;
