import React from "react";
import { Link } from "react-router-dom";
import MeetingRoomDetails from "./MeetingRoomDetails";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import Divider from "@mui/material/Divider";

function MeetingRoom({ room }) {
  return (
    <Link to={`/meeting-rooms/${room.id}`} style={{ textDecoration: "none", color: 'black' } }>
      <div style={{ cursor: "pointer" }}>
        <h2> {room.name} </h2>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PeopleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Capacity" secondary={room.capacity} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BusinessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Floor" secondary={room.floor} />
        </ListItem>
      </div>
      <Divider
        variant="fullWidth"
        component="li"
        style={{ background: "black" }}
      />
    </Link>
  );
}

export default MeetingRoom;
