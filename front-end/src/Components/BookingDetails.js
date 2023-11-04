import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const API = process.env.REACT_APP_API_URL;

function BookingDetails({ rooms }) {
    const [booking, setBooking] = useState([]);
    
    const { id } = useParams()
    
    useEffect(() => {

        axios.get(`${API}/bookings/${id}`).then((response) => {
          setBooking(response.data);
        })
        , []});


    const handleCancel = (e) => {
        console.log('hello')
    }
    const specificRoom = rooms.find((room)=> room.id === booking.meeting_room_id)

  return (
    <>
        <h2> {booking.meeting_name} </h2>
        <p>Start: {new Date(booking.start_date).toLocaleString().replace(',','')} </p>
        <p>End: {new Date(booking.end_date).toLocaleString().replace(',','')} </p>
        <p>Floor: {specificRoom?.floor} </p>
        <button onClick={(e)=>{handleCancel(e)}}>Cancel</button>
          
     
    </>
  )
}

export default BookingDetails