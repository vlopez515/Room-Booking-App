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
  const { name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status, shelter_id, userLiked, image_url, phone_number } = booking;
  try {
    const newBooking = await db.one(
      "INSERT INTO bookings (name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status, shelter_id, userLiked, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *",
      [name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status, shelter_id, userLiked, image_url, phone_number]

    );
    return newBooking;
  } catch (error) {
    return error;
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
  const { name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status, shelter_id, userLiked, image_url, phone_number } = booking;
  try {

const updatedBooking = await db.one("UPDATE bookings SET name=$1, breed=$2, gender=$3, age=$4, color=$5, size=$6, type=$7, maintenance_level=$8, spayed_neutered=$9, house_trained=$10, description=$11, declawed=$12, special_needs=$13, shots_current=$14, status=$15, shelter_id=$16, userLiked=$17, image_url=$18, phone_number=$19 WHERE id=$20 RETURNING *",
  [name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status, shelter_id, userLiked, image_url, phone_number, id ]);

    return updatedBooking;
  } catch (err) {
    return err;
  }
}

module.exports = { 
    getAllBookings, 
    getBooking, 
    createBooking, 
    deleteBooking,
    updateBooking
  };