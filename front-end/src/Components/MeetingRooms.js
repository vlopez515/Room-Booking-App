import { useState, useEffect } from "react";
import axios from "axios";
import MeetingRoom from "./MeetingRoom";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid"


function MeetingRooms({ rooms }) {
  return (
    <div>
      <div className="room">
        <Grid 
         container
         spacing={{ xs: 2, md: 3 }}
         columns={{ xs: 4, sm: 8, md: 12 }}
         justifyContent="center"
         alignItems="center"
        >
        {rooms.map((room, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <MeetingRoom key={room.id} room={room} />
            </Grid>
          );
        })}
        </Grid>
      </div>
    </div>
  );
}

export default MeetingRooms;
