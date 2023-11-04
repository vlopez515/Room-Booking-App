import { useState, useEffect } from "react";
import axios from "axios";
import MeetingRoom from "./MeetingRoom";
import List from "@mui/material/List";


function MeetingRooms({ rooms }) {
  return (
    <div>
      <div className="room">
        {rooms.map((room) => {
          return (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <MeetingRoom key={room.id} room={room} />
            </List>
          );
        })}
      </div>
    </div>
  );
}

export default MeetingRooms;
