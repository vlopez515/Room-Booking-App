import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function Booking({ booking, id }) {
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
    <Link to={`/bookings/${id}`} style={{ textDecoration: "none" }}>
      <div style={{ cursor: "pointer" }}>
        <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-center md:text-left">
                {selectedMeetingRoom ? selectedMeetingRoom.name : "Room Name"}
              </h4>
              <p className="dark:text-gray-400">{meeting_name}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-center sm:text-left">
              {start_date}
            </h4>
            <p className="dark:text-gray-400">{end_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Booking;
