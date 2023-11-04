import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect} from 'react';
import axios from "axios";

// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/MeetingsIndex";
import New from "./Pages/New";
import Show from "./Pages/Show";
import BookingsIndex from "./Pages/BookingsIndex";
import ShowMeetingRoom from "./Pages/ShowMeetingRoom";

// COMPONENTS
import NavBar from "./Components/NavBar";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [meetingRooms, setMeetingRooms] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/meetingRooms`)
      .then((response) => setMeetingRooms(response.data))
      .catch((err) => console.log(err));
  }, []);
  
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home rooms={meetingRooms} />} />
            <Route path="/meeting-rooms/:id" element={<ShowMeetingRoom />} />
            <Route path="/meeting-rooms/new" element={<New />} />
            <Route path="/bookings/" element={<BookingsIndex rooms={meetingRooms} />} />
            <Route path="/bookings/:id" element={<Show rooms={meetingRooms} /> } />
            <Route path="/error" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
