// import { useState } from "react";
// import axios from "axios";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const API = process.env.REACT_APP_API_URL;

// function AvailableRooms() {
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("here")
//     try {
//       const response = await axios.get(`${API}/meetingRooms/available`, {
//         params: { start_date: startDate, end_date: endDate },
//       });
//       console.log(response.data);
//       setAvailableRooms(response.data);
//     } catch (error) {
//       console.error("Error fetching available meeting rooms:", error);
//     }
//   };

//   const handleStartDateChange= (event) => {
//     setStartDate(event.target.value)
//     // setAvailableRooms({ ...availableRooms, [event.target.id]: event.target.value });
//   };

//   const handleEndDateChange= (event) => {
//     setEndDate(event.target.value)
//     // setAvailableRooms({ ...availableRooms, [event.target.id]: event.target.value });
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <div>
//         <div>
//           <p className="font-medium">Find available rooms:</p>
//         </div>
//         <TextField
//           required
//           id="start_date"
//           value={startDate}
//           type="datetime-local"
//           onDateChange={handleStartDateChange}
//         />
//         <TextField
//           required
//           id="end_date"
//           value={endDate}
//           type="datetime-local"
//           onDateChange={handleEndDateChange}
//         />
//         <TextField
         
//           id="Floor"
//           label="Floor"
          
//         />
//         <TextField
         
//           id="Capacity"
//           label="Capacity"
          
//         />
//       </div>
      
//       <Button type="submit" variant="outlined"> Find </Button>
      
//     </Box>
//   );
// }

// export default AvailableRooms;

import React, { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";
import './AvailableRooms.css';

const API = process.env.REACT_APP_API_URL;

function AvailableRooms() {
  // Define state variables to store form input values
  const [formData, setFormData] = useState({
    start_date: '',
    end_date: '',
    floor: '',
    capacity: '',
  });

  // Define state variable to store available rooms
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('step 1')
    try {
      // Make an API request to fetch available meeting rooms
      const response = await axios.get(`${API}/meetingRooms/available`, {
        params: {
          start_date: formData.start_date,
          end_date: formData.end_date,
          floor: formData.floor,
          capacity: formData.capacity,
        },
      });
      console.log(response.data)
      // Update the available rooms state with the response data
      setAvailableRooms(response.data);
    } catch (error) {
      console.error("Error fetching available meeting rooms:", error);
    }
  };

  const handleTextChange = (event) => {
    // Update the formData state with the input values based on the event target's id
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Container>
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
          id="start_date"
          type="datetime-local"
          onChange={handleTextChange}
          value={formData.start_date} // Bind input value to state
        />
        <TextField
          required
          id="end_date"
          type="datetime-local"
          onChange={handleTextChange}
          value={formData.end_date} // Bind input value to state
        />
        <TextField
          id="floor"
          label="Floor"
          onChange={handleTextChange}
          value={formData.floor} // Bind input value to state
        />
        <TextField
          id="capacity"
          label="Capacity"
          onChange={handleTextChange}
          value={formData.capacity} // Bind input value to state
        />
        <Button type="submit" variant="outlined">Find</Button>
        
      </div>
      
      
      
    </Box>
    </Container>
  );
}

export default AvailableRooms;
