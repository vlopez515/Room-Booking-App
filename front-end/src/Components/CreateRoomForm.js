import { redirect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";

const API = process.env.REACT_APP_API_URL;

function CreateRoomForm() {
  const [meetingRoom, setMeetingRoom] = useState({
    name: "",
    floor: null,
    capacity: null,
  });

  const handleTextChange = (event) => {
    setMeetingRoom({ ...meetingRoom, [event.target.id]: event.target.value });
    console.log(meetingRoom);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeetingRoom({ ...meetingRoom, [name]: value });
  };

  const addMeetingRoom = (newMeetingRoom) => {
    axios
      .post(`${API}/meetingRooms`, newMeetingRoom)
      .then(
        () => {
          redirect(`/meetingRooms`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(meetingRoom);
    addMeetingRoom(meetingRoom);
    alert("success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Create a New Room</h1>
      <TextField
        label="Name"
        type="text"
        name="name"
        value={meetingRoom.name}
        onChange={handleInputChange}
        required
        style={{ width: "50%" }}
      />
      <TextField
        label="Capacity"
        variant="outlined"
        type="number"
        name="capacity"
        InputProps={{
          inputProps: { min: 0 },
        }}
        style={{ width: "50%" }}
        value={meetingRoom.capacity}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Floor"
        variant="outlined"
        type="number"
        name="floor"
        InputProps={{
          inputProps: { min: 0 },
        }}
        style={{ width: "50%" }}
        value={meetingRoom.floor}
        onChange={handleInputChange}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "50%" }}
      >
        Submit
      </Button>
    </form>
  );
}

export default CreateRoomForm;
