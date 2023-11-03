import React from 'react';
import MeetingRoomDetails from './MeetingRoomDetails';

function BookRoomForm() {
  return (
    <>
<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Book Room</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full">
					<label for="meetingname" className="text-sm">Meeting Name</label>
					<input id="meetingname" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="start" className="text-sm">Start</label>
					<input id="start" type="text" placeholder="Date & Time" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
                <div className="col-span-full">
					<label for="end" className="text-sm">End</label>
					<input id="end" type="text" placeholder="Date & Time" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="attendees" className="text-sm">Attendees</label>
					<input id="attendees" type="text" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Submit</button>
				</div>
			</div>
		</fieldset>
        </form>
	</section>
    <MeetingRoomDetails />  
    </>
  )
}

export default BookRoomForm;