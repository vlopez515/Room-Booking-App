### Meeting Room Booking App README

This repository contains the backend and database scripts for a Meeting Room Booking App. The code is structured as follows:

*1. /queries directory*

_bookings.js_
Manages the database interactions related to bookings.
Functions include:
getAllBookings: Retrieves all bookings.
getBooking: Fetches a single booking by ID.
createBooking: Creates a new booking.
deleteBooking: Deletes a booking.
updateBooking: Updates booking details.
getBookingsBetweenDates: Fetches bookings within a specified date range.

_meetingRooms.js_
Manages the database interactions related to meeting rooms.
Functions include:
getAllMeetingRooms: Retrieves all meeting rooms.
getMeetingRoom: Fetches a single meeting room by ID.
createMeetingRoom: Creates a new meeting room.
deleteMeetingRoom: Deletes a meeting room.
updateMeetingRoom: Updates meeting room details.

*2. /controllers directory*

_bookingsController.js_
Express Router for handling routes related to bookings.
Endpoints include:
GET /: Retrieves all bookings.
GET /:id: Fetches a single booking by ID.
POST /: Creates a new booking.
DELETE /:id: Deletes a booking.
PUT /:id: Updates booking details.

_meetingRoomsController.js_
Express Router for handling routes related to meeting rooms.
Endpoints include:
GET /: Retrieves all meeting rooms.
GET /available: Fetches available meeting rooms based on a date range and optional capacity filter.
GET /:id: Fetches a single meeting room by ID.
POST /: Creates a new meeting room.
DELETE /:id: Deletes a meeting room.
PUT /:id: Updates meeting room details.

*3. dbConfig.js*
Sets up the database connection using pg-promise based on environment variables.
Defines the tables meetingRooms and bookings along with initial data.

*4. app.js*
Main application file setting up the Express server.
Handles CORS, JSON parsing, and sets up routes for bookings and meeting rooms.

**Setup Instructions**
Ensure pg-promise, express, and other dependencies are installed.
Set up a PostgreSQL database and configure the connection string using environment variables.
Run the SQL script provided in dbConfig.js to create tables and insert sample data.
Run the application using node app.js.

**Usage**
Use endpoints in the controllers to interact with the database for managing bookings and meeting rooms.
Test the functionalities by making HTTP requests to the defined routes.



