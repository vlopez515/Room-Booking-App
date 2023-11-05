import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import "./AvailableRooms.css";

const API = process.env.REACT_APP_API_URL;

function AvailableRooms() {
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    floor: "",
    capacity: "",
  });

  const [availableRooms, setAvailableRooms] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("step 1");
    try {
      const response = await axios.get(`${API}/meetingRooms/available`, {
        params: {
          start_date: formData.start_date,
          end_date: formData.end_date,
          floor: formData.floor,
          capacity: formData.capacity,
        },
      });
      console.log(response.data);
      setAvailableRooms(response.data);
    } catch (error) {
      console.error("Error fetching available meeting rooms:", error);
    }
  };

  const handleTextChange = (event) => {
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
            value={formData.start_date}
          />
          <TextField
            required
            id="end_date"
            type="datetime-local"
            onChange={handleTextChange}
            value={formData.end_date}
          />
          <TextField
            id="floor"
            label="Floor"
            onChange={handleTextChange}
            value={formData.floor}
          />
          <TextField
            id="capacity"
            label="Capacity"
            onChange={handleTextChange}
            value={formData.capacity}
          />
          <Button type="submit" variant="outlined">
            Find
          </Button>
        </div>
      </Box>
    </Container>
  );
}

export default AvailableRooms;
