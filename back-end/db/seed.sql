\c bookings_dev

INSERT INTO bookings (meeting_name, meeting_room_id, start_date, end_date, attendees) VALUES
('Scrum Standup', 1, 2022-03-30 09:30:00, 2022-03-30 09:45:00, 3),
('Scrum Standup', 1, 2022-03-30 09:30:00, 2022-03-30 09:45:00, 3);

INSERT INTO meetingRooms (name, capacity, floor) VALUES 
('Meeting Room 1', 6, 22),
('Boardroom 2', 12, 21),
('Hub', 20, 22);





