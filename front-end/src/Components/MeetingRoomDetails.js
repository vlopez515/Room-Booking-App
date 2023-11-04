import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BookRoomForm from './BookRoomForm';
import Booking from './Booking'

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
  const formatDate = (d) => {
    return new Date(d).toLocaleString();
  }
  
  const conflicts = bookings.filter((booking) => booking.meeting_room_id === Number(id));
  console.log(conflicts)
  return (
    <>
      <div>
      <h2>{meetingRoom?.name}</h2>
      <p>{meetingRoom?.capacity}</p>
      <p>{meetingRoom?.floor}</p>
      </div>
      <BookRoomForm/>
      {conflicts?.map((conflict)=> 
       <div>
        <h2> {conflict.meeting_name} </h2>
        <p>Start: {new Date(conflict.start_date).toLocaleString().replace(',','')} </p>
        <p>End: {new Date(conflict.end_date).toLocaleString().replace(',','')} </p>
          
      </div>
      
       )}
     </>
  )
}

export default MeetingRoomDetails