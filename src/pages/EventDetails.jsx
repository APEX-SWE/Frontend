import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { EventData } from "../data/EventData";
import Footer from "../components/Footer";

export default function EventDetails() {
  const { id } = useParams();
  const event = EventData.find((event) => event.id === parseInt(id));

  if (!event) return <div>Event not found</div>;
  console.log(event);

  return (
    <>
      <Navbar fontColor={"black"} hoverColor={"#DAE5FD2E"} padding={"px-5"} />
      <div className="w-full flex justify-center mt-[80px] px-[40px] mb-[80px]">
        <div className="max-w-[800px] w-full shadow-xl rounded-2xl">
          <img
            className="rounded-t-2xl w-full h-[400px] object-cover"
            src={event.image}
            alt="event"
          />
          <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4">{event.name}</h1>
            <p className="text-md mb-4">
              <b className="text-gray-600">Category: </b>
              {` ${event.category}`}
            </p>
            <p className="text-md mb-4">
              <b className="text-gray-600">Duration: </b>
              {` ${event.duration}`}
            </p>
            <p className="text-md mb-4">
              <b className="text-gray-600">Location: </b>
              {` ${event.location}`}
            </p>
            <p className="text-md mb-4">
              <b className="text-gray-600">Time: </b>
              {`${event.startTime} - ${event.endTime}`}
            </p>
            <p className="text-md text-gray-500 mb-4">
              <b className="text-gray-600">Description:</b>
              <br />
              {event.description}
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
