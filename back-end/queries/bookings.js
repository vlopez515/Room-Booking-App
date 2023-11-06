const db = require("../db/dbConfig");

const getAllBookings = async () => {
  try {
    const allBookings = await db.any('SELECT * FROM bookings');
    return allBookings;
  } catch (err) {
    return err;
  }
};

const getBooking = async (id) => {
  try {
    const oneBooking = await db.one('SELECT * FROM bookings WHERE id=$1', id);
    return oneBooking;
  } catch (error) {
    return error;
  }
};

const createBooking = async (booking) => {
  const { meeting_name, meeting_room_id, start_date, end_date, attendees } = booking;
  try {
    const newBooking = await db.one(
      `INSERT INTO bookings (meeting_name, meeting_room_id, start_date, end_date, attendees)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [meeting_name, meeting_room_id, start_date, end_date, attendees]
    );
    return newBooking;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

const deleteBooking = async (id) => {
  try {
    const deletedBooking = await db.one('DELETE FROM bookings WHERE id = $1 RETURNING *', id);
    return deletedBooking;
  } catch (error) {
    return error;
  }
};

const updateBooking = async (booking, id) => {
  const { meeting_name, meeting_room_id, start_date, end_date, attendees } = booking;
  try {

const updatedBooking = await db.one("UPDATE bookings SET meeting_name=$1, meeting_room_id=$2, start_date=$3, end_date=$4, attendees=$5 WHERE id=$6 RETURNING *",
  [meeting_name, meeting_room_id, start_date, end_date, attendees, id]);

    return updatedBooking;
  } catch (err) {
    return err;
  }
}

// const getBookingsBetweenDates = async (startDate, endDate) => {
//   try {
//     const bookings = await db.any(
//       'SELECT * FROM bookings WHERE start_date >= $1 AND end_date <= $2',
//       [startDate, endDate]
//     );
//     return bookings;
//   } catch (error) {
//     console.error('Error in getBookingsBetweenDates:', error);
//     throw new Error('Error fetching bookings between dates');
//   }
// };

module.exports = {
  getAllBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
  getBookingsBetweenDates
};


