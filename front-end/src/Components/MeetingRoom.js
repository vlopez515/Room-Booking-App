import React from "react";
import { Link } from "react-router-dom";
import MeetingRoomDetails from "./MeetingRoomDetails";


function MeetingRoom({ room }) {
  return (
    <Link to={`/meeting-rooms/${room.id}`} style={{ textDecoration: "none" }}>
      <div style={{ cursor: "pointer" }}>
        <div> {room.name} </div>
        <div> Capacity: {room.capacity} </div>
        <div> Floor: {room.floor} </div>
      </div>
    </Link>
  );
}

export default MeetingRoom;
