INSERT INTO meetingRooms (name, capacity, floor) VALUES 
('Meeting Room 1', 6, 22),
('Boardroom 2', 12, 21),
('Hub', 20, 22),
('Conference Room A', 8, 20),
('Innovation Lab', 15, 23),
('Executive Suite', 4, 21),
('Seminar Hall', 50, 18),
('Training Room 1', 10, 19),
('Collaboration Space', 30, 24),
('Presentation Room', 12, 20),
('Lounge Area', 25, 22),
('Corner Office', 6, 21);

INSERT INTO bookings (meeting_name, meeting_room_id, start_date, end_date, attendees) VALUES
('Scrum Standup', 1, '2022-03-30 09:30:00', '2022-03-30 09:45:00', 3),
('Sprint Review', 1, '2022-03-30 10:00:00', '2022-03-30 10:45:00', 5),
('Team Brainstorming', 2, '2022-03-31 11:00:00', '2022-03-31 12:30:00', 8),
('Product Presentation', 3, '2022-04-01 14:00:00', '2022-04-01 15:30:00', 10),
('Client Meeting', 1, '2022-04-02 09:00:00', '2022-04-02 11:00:00', 6),
('Design Review', 2, '2022-04-02 13:00:00', '2022-04-02 14:30:00', 4),
('Training Session', 3, '2022-04-03 10:00:00', '2022-04-03 12:00:00', 12),
('Project Kickoff', 1, '2022-04-04 09:30:00', '2022-04-04 10:30:00', 5),
('Marketing Strategy', 2, '2022-04-04 14:00:00', '2022-04-04 15:30:00', 8),
('Sales Pitch', 3, '2022-04-05 11:00:00', '2022-04-05 12:30:00', 6);

