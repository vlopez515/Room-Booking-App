import { redirect, useState } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import  Grid from "@mui/material/Grid";
import { Input, InputLabel } from "@mui/material";
import './Form.css'

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
    axios.post(`${API}/meetingRooms`, newMeetingRoom)
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
    console.log(meetingRoom); // Check the object in the console
    addMeetingRoom(meetingRoom);
    alert('success');
  };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={meetingRoom.name}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Capacity:
//           <input
//             type="number"
//             name="capacity"
//             value={meetingRoom.capacity}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Floor:
//           <input
//             type="number"
//             name="floor"
//             value={meetingRoom.floor}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
return (
<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '20px' }} >
  <h1 >
    Create a New Room
  </h1>
{/* <Grid container spacing={5}> */}
  {/* <Grid item xs={6}> */}
    <TextField
      label="Name"
      // variant="outlined"
      type="text"
      name="name"
      value={meetingRoom.name}
      onChange={handleInputChange}
      required
      style={{ width: '50%' }}
      
    />
  {/* </Grid> */}
  {/* <Grid item xs={6}> */}
    <TextField
      label="Capacity"
      variant="outlined"
      type="number"
      name="capacity"
      InputProps={{
        inputProps: { min: 0 }
      }}
      style={{ width: '50%' }}
      value={meetingRoom.capacity}
      onChange={handleInputChange}
      required
      
    />
  {/* </Grid> */}
  {/* <Grid item xs={6}> */}
    <TextField
      label="Floor"
      variant="outlined"
      type="number"
      name="floor"
      InputProps={{
        inputProps: { min: 0 }
      }}
      style={{ width: '50%' }}
      value={meetingRoom.floor}
      onChange={handleInputChange}
      required
      
    />
  {/* </Grid> */}
  {/* <Grid item xs={12}> */}
    <Button 
      type="submit" 
      variant="contained" 
      color="primary"
      style={{ width: '50%' }} 
      >
      Submit
    </Button>
  {/* </Grid> */}
{/* </Grid> */}
</form>
);
};

{/* // return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <input  */}
{/* //         type="text" 
//         placeholder="Name" 
//         className="form-input" 
//         value={meetingRoom.name}
//         onChange={handleInputChange}
//         required
//         />
//       <label for="name" className="form-label">Name</label>

//       <input  */}
{/* //         type="capacity" 
//         placeholder="Capacity" 
//         className="form-input" 
//         value={meetingRoom.capacity}
//         onChange={handleInputChange}
//         />
//       <label for="capacity" className="form-label">Capacity</label>

//       <input  */}
{/* //         type="floor" 
//         placeholder="Floor" 
//         className="form-input" 
//         value={meetingRoom.floor}
//         onChange={handleInputChange}
//         />
//         <label for="floor" className="form-label">Floor</label>
//         <div>
//       <button for="submit" className="form-label">Submit</button>
//       </div>
//     </form>
//   </div>
// )
// } */}



{/* //   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={(event) => {
//         handleSubmit(event);
//       }}
//     >
//       <FormControl>
//         <div>
//           <p className="font-medium">Create Room</p>
//         </div>
//         {/* <TextField
//           required
//           id="Name"
//           type="text"
//           label="Name"
//           onChange={handleInputChange}
//         />
//         <TextField
//           required
//           id="Capacity"
//           type="number"
//           label="Capacity"
//           onChange={handleInputChange}
//         />
//         <TextField
//           required
//           id="Floor"
//           type="number"
//           label="Floor"
//           onChange={handleInputChange}
//         />
//       <Button type="submit" variant="outlined" >
//         Submit
//       </Button> */}
//         <TextField
        
//           required
//           id="Name"
//           type="text"
//           label="Name"
//           onChange={handleInputChange}
//           value={meetingRoom.name}
        
//         />
//         <TextField
//           required
//           id="Capacity"
//           type="number"
//           label="Capacity"
//           onChange={handleInputChange}
//           value={meetingRoom.capacity}
          
//         />
//         <TextField
//           required
//           id="Floor"
//           type="number"
//           label="Floor"
//           onChange={handleInputChange}
//           value={meetingRoom.floor}
          
//         />
//         <Button type="submit" variant="outlined" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </FormControl>
//     </Box>
//   );
// } */}

export default CreateRoomForm;
