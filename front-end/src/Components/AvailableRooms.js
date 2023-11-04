import { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function AvailableRooms() {
  
  const [availableRooms, setAvailableRooms] = useState([]);


  
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event)
    try {
      const response = await axios.get(`${API}/meetingRooms/available`, {
        params: { start_date, end_date, attendees }
      });
      console.log(response.data)
      setAvailableRooms(response.data);
    } catch (error) {
      console.error('Error fetching available meeting rooms:', error);
    }
  };

  const handleTextChange = (event) => {
    // setAvailableRooms({ ...availableRooms, [event.target.id]: event.target.value });
    event
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
                <label for="start" className="text-sm">
                  Start
                </label>
                <input
                  id="start"
                  type="datetime-local"
                  placeholder="Date & Time"
                  onChange={handleTextChange}  
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
                  onChange={handleTextChange} 
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="floor" className="text-sm">
                  Floor
                </label>
                <input
                  type="number"
                  onChange={handleTextChange}
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="capacity" className="text-sm">
                  Capacity
                </label>
                <input
                    type="number"
                    onChange={handleTextChange}
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
