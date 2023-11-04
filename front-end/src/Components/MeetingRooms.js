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
        spacing={2}
        justifyContent='center'
        alignItems='center'
        >
        {rooms.map((room) => {
          return (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <MeetingRoom key={room.id} room={room} />
            </List>
          );
        })}
        </Grid>
      </div>
    </div>
  );
}

export default MeetingRooms;
