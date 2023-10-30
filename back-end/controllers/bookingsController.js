const express = require("express");
const bookings = express.Router();
const {
  getAllBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking
} = require("../queries/bookings.js");


bookings.get("/", async (req, res) => {
  const allbookings = await getAllBookings();
  if (allbookings[0]) {
    res.status(200).json(allbookings);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

bookings.get("/:id", async (req, res) => {
  const { id } = req.params;
  const booking = await getBooking(id);
  if (booking) {
    res.json(booking);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

bookings.post("/", async (req, res) => {
  if(req.body) { 
     const createdBooking = await createBooking(req.body)
      res.status(200).send(createdBooking);
    } else{
      res.status(404).send('Error');
    };
  });


bookings.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBooking = await deleteBooking(id);
  if (deletedBooking.id) {
    res.status(200).json(deletedBooking)
  } else {
    res.status(404).json("Booking not found!");
  }
});

bookings.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBooking= await updateBooking(req.body, id);
  if (updatedBooking.id) {
    res.status(200).json(updatedBooking);
  } else {
    res.status(404).json({error: "Booking NOT updated"});
  }
})

module.exports = bookings;