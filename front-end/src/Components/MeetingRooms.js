import React from "react";

function MeetingRooms() {
  return (
    <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-center md:text-left">
            Name of room
          </h4>
          <p className="dark:text-gray-400">
            Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer
            velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque
            sit amet mi luctus ligula euismod lobortis ultricies et nibh.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold text-center sm:text-left">
          Name of room
        </h4>
        <p className="dark:text-gray-400" >
          Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer
          velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque
          sit amet mi luctus ligula euismod lobortis ultricies et nibh.
        </p>
      </div>
    </div>
  );
}

export default MeetingRooms;
