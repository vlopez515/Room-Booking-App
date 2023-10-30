DROP DATABASE IF EXISTS bookings_dev;
CREATE DATABASE bookings_dev;

\c bookings_dev;

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY, 
    meeting_name TEXT, 
    meeting_room_id NUMBER, 
    start_date TIMESTAMP,
    end_date TIMESTAMP, 
    attendees NUMBER, 
);

DROP TABLE IF EXISTS meetingRooms;

CREATE TABLE meetingRooms (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    capacity NUMBER,
    floor NUMBER,
);
