import React from "react";
import AvailableRooms from "../Components/AvailableRooms";
import MeetingRooms from "../Components/MeetingRooms";

function Home() {
  return (
    <>
      <div>
        <AvailableRooms />
      </div>
      <div>
        <MeetingRooms />
      </div>
    </>
  );
}

export default Home;
