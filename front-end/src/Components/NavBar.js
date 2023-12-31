import { Link } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ListIcon from '@mui/icons-material/List';
import AddBoxIcon from '@mui/icons-material/AddBox';



function NavBar() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
  
	return (
		<div style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: "#DEECFB" }}>
	  <Box sx={{ width: '100%' }}>
		<Tabs value={value} onChange={handleChange} centered>
		  <Tab icon={<MeetingRoomIcon />} label="Meeting Rooms" to="/" component={Link} />
		  <Tab icon={<ListIcon />}label="Bookings" to="/bookings" component={Link} />
		  <Tab icon={<AddBoxIcon />}label="New Meeting Room" to="/meeting-rooms/new" component={Link} />
		</Tabs>
	  </Box>
	  </div>
	);
  }

  
  
  
  
export default NavBar;
