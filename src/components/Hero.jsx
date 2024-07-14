import React from "react";

import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: 'url("./background.jpg")' }}
      className="px-5 bg-no-repeat bg-cover w-full h-dvh"
    >
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center mt-[200px]">
        <div className=" absolute left-0 bg-white w-[55px] rounded-e-[18px] h-[250px] flex flex-col justify-around items-center">
          <FontAwesomeIcon
            className="text-[30px]"
            color="#000000"
            icon={faXTwitter}
          />
          <FontAwesomeIcon
            className="text-[30px]"
            color="#000000"
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            className="text-[30px]"
            color="#000000"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-[30px]"
            color="#000000"
            icon={faFacebook}
          />
        </div>
        <h2 className="text-white font-semibold text-[45px]">
          Welcome to Youth Tech Nexus
        </h2>
        <div className=" items-center p-1 flex justify-center mt-4 w-[55rem] h-[3.5rem] rounded-full bg-white">
          <input
            className="w-full rounded-full outline-none border-none pl-[30px] pr-2"
            placeholder="Search Events..."
            type={"text"}
          />
          <div className=" cursor-pointer h-[50px] w-[53px] rounded-full flex justify-center items-center  bg-[#FFBC00]">
            <FontAwesomeIcon color="#fff" icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="mt-6 cursor-pointer bg-[#FFBC00] h-[45px] text-white flex justify-center items-center px-[20px] rounded-md">
          <h3>Browse Events</h3>
        </div>
      </div>
    </div>
  );
}
