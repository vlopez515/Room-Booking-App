import React from "react";
import FindRoomForm from "../Components/FindRoomForm";
import MeetingRooms from "../Components/MeetingRooms";

function Home() {
  return (
    <>
      <div>
        <FindRoomForm />
      </div>
      <div>
        <MeetingRooms />
      </div>
    </>
  );
}

export default Home;
