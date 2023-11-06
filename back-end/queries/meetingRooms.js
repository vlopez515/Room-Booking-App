const db = require("../db/dbConfig");

const getAllMeetingRooms= async () => {
  try {
    const allMeetingRooms= await db.any('SELECT * FROM meetingRooms');
    return allMeetingRooms;
  } catch (err) {
    return err;
  }
};

const getAvailableRooms = async (start_date, end_date, floor, capacity) => {

  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  let queryParams = [startDate, endDate]; // Use parsed Date objects
  let floorCondition = '';
  let capacityCondition = '';

  const query = `
    SELECT mr.*
    FROM meeting_rooms mr
    WHERE 
        mr.floor = COALESCE($3, mr.floor) 
        AND mr.capacity >= COALESCE($4, mr.capacity)
        AND NOT EXISTS (
            SELECT 1 FROM bookings 
            WHERE 
                bookings.meeting_room_id = mr.id
                AND NOT (bookings.start_date > $2 OR bookings.end_date < $1)
        )
  `;

  try {
    const availableRooms = await db.any(query, queryParams);
    return availableRooms;
  } catch (error) {
    console.error('Error in getAvailableRooms:', error);
    throw error;
  }
};



const getMeetingRoom = async (id) => {
  try {
    console.log(id);
    const oneMeetingRoom = await db.one('SELECT * FROM meetingRooms WHERE id=$1', id);
    console.log(`Finished oneMeetingRoom ${true}`);
    return oneMeetingRoom;
  } catch (error) {
    return error;
  }
};

const createMeetingRoom = async (meetingRoom) => {
  const { name, capacity, floor } = meetingRoom;
  try {
    const newMeetingRoom = await db.one(
      "INSERT INTO meetingRooms (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *",
      [name, capacity, floor]
      
    );
    return newMeetingRoom;
  } catch (error) {
    return error;
  }
};

const deleteMeetingRoom = async (id) => {
  try {
    const deletedMeetingRoom = await db.one('DELETE FROM meetingRoom WHERE id = $1 RETURNING *', id);
    return deletedMeetingRoom;
  } catch (error) {
    return error;
  }
};

const updateMeetingRoom = async (meetingRoom, id) => {
  const { name, capacity, floor } = meetingRoom;
  try {

const updatedMeetingRoom = await db.one("UPDATE meeting_room SET name=$1, capacity=$2, floor=$3 WHERE id=$4 RETURNING *",
  [name, capacity, floor, id]);

    return updatedMeetingRoom;
  } catch (err) {
    return err;
  }
}


module.exports = { 
    getAllMeetingRooms, 
    getMeetingRoom, 
    createMeetingRoom, 
    deleteMeetingRoom,
    updateMeetingRoom,
    getAvailableRooms,
  };