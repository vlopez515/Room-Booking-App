import { Link } from "react-router-dom";

function Booking({ booked, id }) {
  const {
    name,
    meeting_name,
    meeting_room_id,
    start_date,
    end_date,
    attendees,
  } = booked;


  return (
    <Link to={`/bookings/${id}`} style={{ textDecoration: "none" }}>
      <div style={{ cursor: "pointer" }}>
        <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-center md:text-left">
                {meeting_room_id}
              </h4>
              <p className="dark:text-gray-400">{meeting_name}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-center sm:text-left">
              {(new Date).datetoLocaleString(start_date)}
            </h4>
            <p className="dark:text-gray-400">{end_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Booking;
