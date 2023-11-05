import { redirect, useState } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Input, InputLabel } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

function CreateRoomForm() {
  const [meetingRoom, setMeetingRoom] = useState({
    name: "",
    floor: 0,
    capacity: 0,
  });

  // const addMeetingRoom = (newMeetingRoom) => {

  //   axios
  //     .post(`${API}/meetingRooms`, newMeetingRoom)
  //     .then(
  //       () => {
  //         redirect(`/meetingRooms`);
  //       },
  //       (error) => console.error(error)
  //     )
  //     .catch((c) => console.warn("catch", c));
  // };

  const handleTextChange = (event) => {
    setMeetingRoom({ ...meetingRoom, [event.target.id]: event.target.value });
    console.log(meetingRoom);
  };

  // const handleSubmit = (event) => {
  //   console.log(event.target.value);
  //   event.preventDefault();
  //   addMeetingRoom(meetingRoom);
  //   console.log(meetingRoom)
  // };



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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={meetingRoom.name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Capacity:
          <input
            type="number"
            name="capacity"
            value={meetingRoom.capacity}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Floor:
          <input
            type="number"
            name="floor"
            value={meetingRoom.floor}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};



  // return (
  //   <Box
  //     component="form"
  //     sx={{
  //       "& .MuiTextField-root": { m: 1, width: "25ch" },
  //     }}
  //     noValidate
  //     autoComplete="off"
  //     onSubmit={(event) => {
  //       handleSubmit(event);
  //     }}
  //   >
  //     <FormControl>
  //       <div>
  //         <p className="font-medium">Create Room</p>
  //       </div>
  //       {/* <TextField
  //         required
  //         id="Name"
  //         type="text"
  //         label="Name"
  //         onChange={handleTextChange}
  //       />
  //       <TextField
  //         required
  //         id="Capacity"
  //         type="number"
  //         label="Capacity"
  //         onChange={handleTextChange}
  //       />
  //       <TextField
  //         required
  //         id="Floor"
  //         type="number"
  //         label="Floor"
  //         onChange={handleTextChange}
  //       />
  //     <Button type="submit" variant="outlined" >
  //       Submit
  //     </Button> */}
  //       <TextField
  //         required
  //         id="Name"
  //         type="text"
  //         label="Name"
  //         onChange={handleTextChange}
  //         value={meetingRoom.Name} // Connect value to state
  //       />
  //       <TextField
  //         required
  //         id="Capacity"
  //         type="number"
  //         label="Capacity"
  //         onChange={handleTextChange}
  //         value={meetingRoom.Capacity} // Connect value to state
  //       />
  //       <TextField
  //         required
  //         id="Floor"
  //         type="number"
  //         label="Floor"
  //         onChange={handleTextChange}
  //         value={meetingRoom.Floor} // Connect value to state
  //       />
  //       <Button type="submit" variant="outlined" onClick={handleSubmit}>
  //         Submit
  //       </Button>
  //     </FormControl>
  //   </Box>
  // );
// }

export default CreateRoomForm;
