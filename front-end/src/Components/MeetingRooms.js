import { useState, useEffect } from 'react';
import axios from 'axios';
import MeetingRoom from './MeetingRoom';


function MeetingRooms({ rooms }) {
  


  return (
    <div>
      <div className="room">
        {rooms.map((room) => {
          return (
          <MeetingRoom key={room.id} room={room} /> 
          )
        })}
        </div>
      </div>
  );
}

export default MeetingRooms;
