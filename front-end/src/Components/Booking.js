import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divider from "@mui/material/Divider";

const API = process.env.REACT_APP_API_URL;

function Booking({ booking, id}) {
  const {
    name,
    meeting_name,
    meeting_room_id,
    start_date,
    end_date,
    attendees,
  } = booking;

const [meetingRooms, setMeetingRooms] = useState([]);

useEffect(() => {
    axios
      .get(`${API}/meetingRooms`)
      .then((response) => setMeetingRooms(response.data))
      .catch((err) => console.log(err));
  }, []);

  const findMeetingRoom = (roomId) => {
    return meetingRooms.find(room => room.id === roomId);
  };

  const selectedMeetingRoom = findMeetingRoom(meeting_room_id);
  

  return (

    <Link to={`/bookings/${id}`} style={{ textDecoration: "none", color: 'black' }}>
      <div style={{ cursor: "pointer" }}>
              <h4>
                 {selectedMeetingRoom ? selectedMeetingRoom.name : "Room Name"} - {booking.meeting_name}
              </h4>
              <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessTimeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Start" secondary={new Date(booking.start_date).toLocaleString().replace(',','')} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessTimeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="End" secondary={new Date(booking.start_date).toLocaleString().replace(',','')} />
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

export default Booking;
