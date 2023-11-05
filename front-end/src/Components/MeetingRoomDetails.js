import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BookRoomForm from './BookRoomForm';
import Booking from './Booking'
import Avatar from "@mui/material/Avatar";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";

const API = process.env.REACT_APP_API_URL

function MeetingRoomDetails() {
  const [meetingRoom, setMeetingRoom] = useState([]);
  const [bookings, setBookings] = useState([]);
  
  let { id } = useParams();
 
  useEffect(() => {
    axios.get(`${API}/meetingRooms/${id}`).then((response) => {
      setMeetingRoom(response.data);
    });
  
    axios.get(`${API}/bookings`).then((response) => {
      setBookings(response.data);
    });
  }, [id]);
  

  const conflicts = bookings.filter((booking) => booking.meeting_room_id === Number(id));
  console.log(conflicts)

  return (
    <div>
       <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px' }}>
      <h2>{meetingRoom?.name}</h2>
      <p style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Avatar><PeopleIcon /></Avatar>
        <span>Capacity: {meetingRoom?.capacity}</span>
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Avatar><BusinessIcon /></Avatar>
        <span>Floor: {meetingRoom?.floor}</span>
      </p>
    </div>
  </div>
      <BookRoomForm meetingRoom={meetingRoom}/>
      {conflicts?.map((conflict)=> 
       <div>
        <h2> {conflict.meeting_name} </h2>
        <p>Start: {new Date(conflict.start_date).toLocaleString().replace(',','')} </p>
        <p>End: {new Date(conflict.end_date).toLocaleString().replace(',','')} </p>
      </div>
      
       )}
     </div>
  )
}

export default MeetingRoomDetails