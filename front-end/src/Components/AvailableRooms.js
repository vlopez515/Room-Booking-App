import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function AvailableRooms() {
  
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [floor, setFloor] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${API}/meetingRooms/available`, {
        params: { startDate, endDate, capacity }
      });
      setMeetingRooms(response.data);
    } catch (error) {
      console.error('Error fetching available meeting rooms:', error);
    }
  };

  return (
    <>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Find available rooms:</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label for="startDate" className="text-sm">
                  Start
                </label>
                <input
                  id="start"
                  type="datetime-local"
                  placeholder="Date & Time"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)} required
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="end" className="text-sm">
                  End
                </label>
                <input
                  id="end"
                  type="datetime-local"
                  placeholder="Date & Time"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)} required
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="floor" className="text-sm">
                  Floor
                </label>
                <input
                  type="number"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="capacity" className="text-sm">
                  Capacity
                </label>
                <input
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <button type='submit' className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                  Find
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default AvailableRooms;
