import { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const API = process.env.REACT_APP_API_URL;

function AvailableRooms() {
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      const response = await axios.get(`${API}/meetingRooms/available`, {
        params: { start_date, end_date, attendees },
      });
      console.log(response.data);
      setAvailableRooms(response.data);
    } catch (error) {
      console.error("Error fetching available meeting rooms:", error);
    }
  };

  const handleTextChange = (event) => {
    // setAvailableRooms({ ...availableRooms, [event.target.id]: event.target.value });
    event;
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
          <p className="font-medium">Find available rooms:</p>
        </div>
        <TextField
          required
          id="Start"
          type="datetime-local"
          ontextChange={handleTextChange}
        />
        <TextField
          required
          id="End"
          type="datetime-local"
          ontextChange={handleTextChange}
        />
        <TextField
         
          id="Floor"
          label="Floor"
          ontextChange={handleTextChange}
        />
        <TextField
         
          id="Capacity"
          label="Capacity"
          onSubmit={handleTextChange}
        />
      </div>
      <Button>
      <Button variant="outlined"> Find </Button>
      </Button>
    </Box>
  );
}

export default AvailableRooms;
