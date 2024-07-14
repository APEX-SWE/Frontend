import React from "react";
import { Colors } from "./Colors";
import { EventData } from "../data/EventData";

export default function EventOverview() {
  const filteredEvents = EventData.slice(0, 9);
  return (
    <div className="px-14">
      <div className="mt-14 flex flex-col items-center w-full">
        <h1
          style={{ color: Colors.primaryFontColor }}
          className={`text-[50px] font-semibold`}
        >
          UPCOMING EVENTS
        </h1>
        <p
          style={{ color: Colors.secondaryFontColor }}
          className="text-[16px] text-center w-[38rem]"
        >
          Lorem ipsum dolor sit amet consectetur. Pellentesque massa ullamcorper
          <br />
          fames a vel. Donec hendrerit id sit aliquet aenean ut.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-8 justify-center">
        {filteredEvents.map((event) => (
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
        <div className=" w-full flex justify-center items-center">
          <button className="mt-4 mb-8 w-[200px] h-[50px] bg-[#FFBC00] text-white text-center rounded-full">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
}
