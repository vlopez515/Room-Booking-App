import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divider from "@mui/material/Divider";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";

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


const formattedDate = new Date(booking.start_date)

const options = {
  timeZone: 'America/New_York', 
  timeZoneName : 'short', 
  hour12: false, 
  year: 'numeric', 
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}; 

const estTime = new Intl.DateTimeFormat('en-US', options).format(formattedDate)

  
  console.log(id)
  return (
    <Card sx={{ 
      minWidth: 275, 
      ':hover': {
        boxShadow: 20, 
      }, 
      backgroundColor: "#7AB3EF"
      }} >
      <CardContent style={{textAlign: "center"}}>
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
          <ListItemText primary="End" secondary={new Date(booking.end_date).toLocaleString().replace(',','')} />
        </ListItem>
      </div>
    </Link>
    </CardContent>
    </Card>
  );
}

export default Booking;
