import React from "react";
import AvailableRooms from "../Components/AvailableRooms";
import MeetingRooms from "../Components/MeetingRooms";

function Home({ rooms }) {

  return (
    <>
      <div>
        <AvailableRooms />
      </div>
      <div>
        <MeetingRooms rooms={rooms}/>
      </div>
    </>
  );
}

export default Home;
