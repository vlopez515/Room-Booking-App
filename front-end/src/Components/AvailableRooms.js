import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Alert from '@mui/material/Alert';
import "./AvailableRooms.css";
import AvailableRoomsList from "./AvailableRoomsList";

const API = process.env.REACT_APP_API_URL;

function AvailableRooms() {
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    floor: "",
    capacity: "",
  });
  const [errors, setErrors] = useState({});
  const [availableRooms, setAvailableRooms] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.start_date) {
      tempErrors.start_date = 'Start date is required.';
    }
    if (!formData.end_date) {
      tempErrors.end_date = 'End date is required.';
    }
    if (formData.capacity && isNaN(formData.capacity)) {
      tempErrors.capacity = 'Capacity must be a number.';
    }
    if (formData.capacity && parseInt(formData.capacity, 10) < 1) {
      tempErrors.capacity = 'Capacity must be greater than 0.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    if (!validate()) return;
    setSearchAttempted(true);

    const queryParams = {
      start_date: formData.start_date,
      end_date: formData.end_date,

      ...(formData.floor && { floor: formData.floor }),
      ...(formData.capacity && { capacity: formData.capacity }),
    };

    try {
      const response = await axios.get(`${API}/meetingRooms/available`, { params: queryParams });
      console.log(response.data)
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

    setErrors({
      ...errors,
      [event.target.id]: "",
    });
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
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
            label="Start Date"
            type="datetime-local"
            onChange={handleTextChange}
            value={formData.start_date}
            error={!!errors.start_date}
            helperText={errors.start_date}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="end_date"
            label="End Date"
            type="datetime-local"
            onChange={handleTextChange}
            value={formData.end_date}
            error={!!errors.end_date}
            helperText={errors.end_date}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="floor"
            label="Floor (optional)"
            onChange={handleTextChange}
            value={formData.floor}
            error={!!errors.floor}
            helperText={errors.floor}
          />
          <TextField
            id="capacity"
            label="Capacity (optional)"
            type="number"
            onChange={handleTextChange}
            value={formData.capacity}
            error={!!errors.capacity}
            helperText={errors.capacity}
          />
          <Button type="submit" variant="contained" color="primary">
            Find Rooms
          </Button>
        </div>
      </Box>
      {searchAttempted && availableRooms.length === 0 && (
    <Alert severity="info">No rooms available. Please adjust your search criteria.</Alert>
      )}
      <AvailableRoomsList rooms={availableRooms} />
    </Container>
  );
}

export default AvailableRooms;
