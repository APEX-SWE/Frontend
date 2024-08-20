import React from "react";

export default function Filter({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="mt-10 w-full justify-center flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-14">
      {/* Event Type Filter */}
      <div className="flex flex-col">
        <label
          htmlFor="eventType"
          className="mb-2 text-sm font-semibold text-gray-700"
        >
          Event Type
        </label>
        <select
          id="eventType"
          name="eventType"
          value={filters.eventType}
          onChange={handleFilterChange}
          className="w-[200px] p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="past">Past</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex flex-col">
        <label
          htmlFor="category"
          className="mb-2 text-sm font-semibold text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="w-[200px] p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          <option value="AI Challenge">AI Challenge</option>
          <option value="Tech Summit">Tech Summit</option>
          <option value="Conference">Conference</option>
          <option value="Exhibition">Exhibition</option>
          <option value="Workshop">Workshop</option>
          <option value="Seminar">Seminar</option>
          <option value="Training">Training</option>
          <option value="Panel Discussion">Panel Discussion</option>
          <option value="Bootcamp">Bootcamp</option>
          <option value="Summit">Summit</option>
          <option value="Forum">Forum</option>
          <option value="Symposium">Symposium</option>
          <option value="Webinar">Webinar</option>
          <option value="Meetup">Meetup</option>
        </select>
      </div>
    </div>
  );
}
