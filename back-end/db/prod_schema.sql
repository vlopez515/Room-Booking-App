DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY, 
    meeting_name TEXT, 
    meeting_room_id NUMBER, 
    start_date TIMESTAMP,
    end_date TIMESTAMP, 
    attendees NUMBER, 
);

DROP TABLE IF EXISTS meeting_room;

CREATE TABLE meeting_room (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    capacity NUMBER,
);
