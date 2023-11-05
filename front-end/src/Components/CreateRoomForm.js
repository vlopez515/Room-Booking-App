import { redirect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const API = process.env.REACT_APP_API_URL;

function CreateRoomForm() {

  const [meetingRoom, setMeetingRoom] = useState({
    name: '',
    floor: 0,
    capacity: 0,
  });
    
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
   
     
     const handleTextChange = (event) => {
       setMeetingRoom({ ...meetingRoom, [event.target.id]: event.target.value });
     };
   
     const handleSubmit = (event) => {
       event.preventDefault();
       addMeetingRoom(meetingRoom);
     };

  return (
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <div>
    <div>
    <p className="font-medium">Create Room</p>
        </div>
        <TextField
          required
          id="Name"
          type="text"
          label="Name"
          onTextChange={handleTextChange}
          
        />
        <TextField
          required
          id="Capacity"
          type="number"
          label="Capacity"
          
          onTextChange={handleTextChange}
        />
        <TextField
          required
          id="Floor"
          type="number"
          label="Floor"
          
          onTextChange={handleTextChange}
        />
      </div>
      <Button>
      <Button variant="outlined">Submit</Button>
      </Button>
  </Box>
  )
}

export default CreateRoomForm;