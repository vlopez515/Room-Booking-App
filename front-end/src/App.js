import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/MeetingsIndex";
import New from "./Pages/New";
import Show from "./Pages/Show";
import BookingsIndex from "./Pages/BookingsIndex";


// COMPONENTS
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meeting-rooms/:id" element={<Show />} />
            <Route path="/meeting-rooms/new" element={<New />} />
            <Route path="/bookings/" element={<BookingsIndex />} />
            <Route path="/bookings/:id" element={<Show />} />
            <Route path="/error" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
