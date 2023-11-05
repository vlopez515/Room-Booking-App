const express = require("express");
const meetingRooms = express.Router();
const {
  getAllMeetingRooms,
  getMeetingRoom,
  createMeetingRoom,
  deleteMeetingRoom,
  updateMeetingRoom, 
} = require("../queries/meetingRooms.js");

const { getBookingsBetweenDates } = require('../queries/bookings');


meetingRooms.get("/", async (req, res) => {
  const allmeetingRooms = await getAllMeetingRooms();
  if (allmeetingRooms[0]) {
    res.status(200).json(allmeetingRooms);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

meetingRooms.get("/available", async (req, res) => {
    const { startDate, endDate } = req.query;
  
    try {
      // const allMeetingRooms = await getAllMeetingRooms();
      // const bookingsBetweenDates = await getBookingsBetweenDates(startDate, endDate);
      // console.log(getBookingsBetweenDates())
  
      // const filteredRooms = allMeetingRooms.filter(room => {
      // const bookingsForRoom = bookingsBetweenDates.filter(booking => booking.meeting_room_id === room.id);
      // const isAvailable = !bookingsForRoom.length;
      // const capacityMatch = capacity ? room.capacity >= parseInt(capacity, 10) : true;
  
      //   return isAvailable && capacityMatch;
      // });
  
      // res.json(filteredRooms);
      const availableRooms = await getAvailableRooms(startDate, endDate);
      res.json(availableRooms)
    } catch (error) {
      console.error('Error fetching available meeting rooms:', error);
      res.status(500).json({ error: 'Error fetching available meeting rooms' });
    }
  });

meetingRooms.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("calling getMeetingRoom()");
  const meetingRoom = await getMeetingRoom(id);
  if (meetingRoom) {
    res.json(meetingRoom);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

meetingRooms.post("/", async (req, res) => {
  if(req.body) { 
     const createdMeetingRoom = await createMeetingRoom(req.body)
      res.status(200).send(createdMeetingRoom);
    } else{
      res.status(404).send('Error');
    };
  });


meetingRooms.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedMeetingRoom = await deleteMeetingRoom(id);
  if (deletedMeetingRoom.id) {
    res.status(200).json(deletedMeetingRoom)
  } else {
    res.status(404).json("meetingRoom not found!");
  }
});

meetingRooms.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedMeetingRoom= await updateMeetingRoom(req.body, id);
  if (updatedMeetingRoom.id) {
    res.status(200).json(updatedMeetingRoom);
  } else {
    res.status(404).json({error: "Meetingroom NOT updated"});
  }
});


module.exports = meetingRooms;