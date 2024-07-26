import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { EventData } from "../data/EventData";

export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(EventData.length / eventsPerPage);

  // Get current events
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = EventData.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar fontColor={"black"} hoverColor={"#DAE5FD2E"} padding={"px-5"} />
      <div className="w-full px-[40px] flex flex-wrap justify-center gap-10 mt-14">
        {currentEvents.map((event) => (
          <div
            key={event.id}
            className="w-[350px] delay-100 cursor-pointer transition duration-300 ease-in-out hover:scale-105 rounded-b-2xl shadow-xl"
          >
            <div>
              <img
                className=" rounded-t-2xl w-full h-[200px] object-cover"
                src={event.image}
                alt="technology"
              />
            </div>
            <div className=" p-5 flex flex-col justify-between h-[160px] ">
              <h1 className=" text-[1.7rem] font-semibold">{event.name}</h1>
              <div className="flex gap-2">
                <div className="flex justify-center items-center text-sm text-blue-600 px-5 rounded-xl py-[1px] border-2">
                  {event.category}
                </div>
                <div className="flex justify-center items-center text-sm text-blue-600 px-5 rounded-xl border-2">
                  {event.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-center my-[60px]">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-2 ${
              currentPage === index + 1
                ? "bg-blue-700"
                : "text-[#464646] bg-[#aeaeae60]"
            } text-white rounded-full w-[30px] h-[30px] flex justify-center items-center`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </>
  );
}
