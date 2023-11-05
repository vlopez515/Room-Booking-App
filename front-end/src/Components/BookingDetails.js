import { redirect, useEffect, useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const API = process.env.REACT_APP_API_URL;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BookingDetails({ rooms }) {
  const [booking, setBooking] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/bookings/${id}`).then((response) => {
      setBooking(response.data);
    }),
      [id];
  });

  let navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`${API}/bookings/${id}`)
      .then((response) => {
        navigate(`/bookings`)
      })
      .catch((error) => console.log(error));
  };

  const specificRoom = rooms?.find(
    (room) => room.id === booking.meeting_room_id
  );

  return (
    <>
      <h2> {booking.meeting_name} </h2>
      <p>
        Start: {new Date(booking.start_date).toLocaleString().replace(",", "")}{" "}
      </p>
      <p>
        End: {new Date(booking.end_date).toLocaleString().replace(",", "")}{" "}
      </p>
      <p>Floor: {specificRoom?.floor} </p>
      <div>
        <Button onClick={handleOpen}>Cancel</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to cancel this booking?
            </Typography>
            <Button onClick={handleDelete}>Yes</Button>
            <Button onClick={handleClose}>No </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default BookingDetails;
