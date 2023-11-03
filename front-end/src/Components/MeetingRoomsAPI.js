import { useState } from 'react';
import axios from 'axios';
import MeetingRoom from './MeetingRoom';

const API = process.env.REACT_APP_API_URL;

function MeetingRoomsAPI() {
  
const [meetingRooms, setMeetingRooms] = useState([]);

useEffect(() => {
    axios
      .get(`${API}/meetingRooms`)
      .then((response) => setMeetingRooms(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="room">
        {meetingRooms.map((room) => {
          return <MeetingRoom key={room.id} room={room} /> 
        })}
        </div>
      </div>
  );
}

  export default MeetingRoomsAPI;