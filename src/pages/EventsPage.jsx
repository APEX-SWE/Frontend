import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { EventData } from "../data/EventData";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredEvents, setFilteredEvents] = useState(EventData);
  const [filters, setFilters] = useState({
    eventType: "all",
    category: "all",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const eventsPerPage = 6;
  useEffect(() => {
    let filtered = EventData;

    if (filters.eventType !== "all") {
      filtered = filtered.filter((event) => event.type === filters.eventType);
    }

    if (filters.category !== "all") {
      filtered = filtered.filter(
        (event) => event.category === filters.category
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
    setCurrentPage(1);
  }, [filters, searchTerm]);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar fontColor={"black"} hoverColor={"#DAE5FD2E"} padding={"px-5"} />
      <div className="w-full flex flex-col items-center">
        <SearchBar
          listTopMargin={"mt-[80px]"}
          height={"h-[3.5rem]"}
          setSearchTerm={setSearchTerm} // Pass setSearchTerm to SearchBar
        />
        <Filter filters={filters} setFilters={setFilters} />
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 flex flex-wrap justify-center gap-6 mt-10">
          {currentEvents.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id}>
              <div className="w-full sm:w-[350px] delay-100 cursor-pointer transition duration-300 ease-in-out hover:scale-105 rounded-b-2xl shadow-xl">
                <div>
                  <img
                    className="rounded-t-2xl w-full h-[200px] object-cover"
                    src={event.image}
                    alt="event"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between h-[160px]">
                  <h1 className="text-[1.5rem] sm:text-[1.7rem] font-semibold">
                    {event.name}
                  </h1>
                  <div className="flex gap-2">
                    <div className="flex justify-center items-center text-xs sm:text-sm text-blue-600 px-3 sm:px-5 rounded-xl py-[1px] border-2">
                      {event.category}
                    </div>
                    <div className="flex justify-center items-center text-xs sm:text-sm text-blue-600 px-3 sm:px-5 rounded-xl border-2">
                      {event.duration}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="pagination flex flex-wrap justify-center my-[30px]">
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
              className={`px-3 py-1 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
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
      </div>
      <Footer />
    </>
  );
}
