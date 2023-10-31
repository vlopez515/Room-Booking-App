DROP DATABASE IF EXISTS bookings_dev;
CREATE DATABASE bookings_dev;

\c bookings_dev;

DROP TABLE IF EXISTS meetingRooms;

CREATE TABLE meetingRooms (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    capacity INTEGER,
    floor INTEGER
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY, 
    meeting_name TEXT, 
    meeting_room_id INTEGER REFERENCES meetingRooms(id), 
    start_date TIMESTAMP,
    end_date TIMESTAMP, 
    attendees INTEGER
);
