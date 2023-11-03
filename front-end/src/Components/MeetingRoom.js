import React from 'react';
import MeetingRoomForm from './BookRoomForm';

function MeetingRoom( {room }) {
  return (
    <>
    <div> {room.name} </div>
    <div> Floor: {room.floor} </div>
    <div> Capacity: {room.capacity} </div>
    </>
  )
}

export default MeetingRoom