import React from "react";
import AvailableRooms from "../Components/AvailableRooms";
import MeetingRooms from "../Components/MeetingRooms";

function Home({ rooms }) {

  return (
    <>
    <div style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white' }}>
      <div>
        <AvailableRooms />
      </div>
      </div>
      <div>
        <MeetingRooms rooms={rooms}/>
      </div>
    </>
  );
}

export default Home;
