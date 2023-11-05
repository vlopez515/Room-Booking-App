import { useState, useEffect } from "react";
import axios from "axios";
import Booking from "./Booking";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          {bookings.map((booking, index) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                  <Booking id={booking.id} booking={booking} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Bookings;
