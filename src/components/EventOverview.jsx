import React from "react";
import { Colors } from "./Colors";
import { EventData } from "../data/EventData";
import { Link } from "react-router-dom";

export default function EventOverview() {
  const filteredEvents = EventData.slice(0, 9);

  return (
    <div className="px-4 sm:px-8 lg:px-14">
      <div className="mt-14 flex flex-col items-center w-full">
        <h1
          style={{ color: Colors.primaryFontColor }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold"
        >
          UPCOMING EVENTS
        </h1>
        <p
          style={{ color: Colors.secondaryFontColor }}
          className="text-sm sm:text-base text-center w-full max-w-2xl"
        >
          Lorem ipsum dolor sit amet consectetur. Pellentesque massa ullamcorper
          <br />
          fames a vel. Donec hendrerit id sit aliquet aenean ut.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-8 justify-center">
        {filteredEvents.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id}>
            <div className="w-[350px] sm:w-[350px] lg:w-[350px] delay-100 cursor-pointer transition duration-300 ease-in-out hover:scale-105 rounded-b-2xl shadow-xl">
              <div>
                <img
                  className="rounded-t-2xl w-full h-[200px] sm:h-[200px] lg:h-[250px] object-cover"
                  src={event.image}
                  alt={event.name}
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-[160px]">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {event.name}
                </h1>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center text-sm text-blue-600 px-4 py-1 rounded-xl border-2">
                    {event.category}
                  </div>
                  <div className="flex justify-center items-center text-sm text-blue-600 px-4 py-1 rounded-xl border-2">
                    {event.duration}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className="w-full flex justify-center items-center">
          <Link to={"/events"}>
            <button className="mt-4 mb-8 w-[200px] h-[50px] bg-[#FFBC00] text-white text-center rounded-full">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
