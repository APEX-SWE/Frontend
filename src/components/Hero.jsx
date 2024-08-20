import React, { useEffect } from "react";

import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { EventData } from "../data/EventData";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: 'url("./background.jpg")' }}
      className="px-5 bg-no-repeat bg-cover w-full h-dvh"
    >
      <Navbar fontColor={"white"} hoverColor={"#144ABE43"} />
      <div className="w-full flex flex-col items-center justify-center mt-[200px]">
        <div className=" absolute left-0 bg-white w-[55px] rounded-e-[18px] h-[250px] flex flex-col justify-around items-center">
          <a
            href=""
            className="hover:scale-110 transition-all decoration-black"
          >
            <FontAwesomeIcon
              className="text-[30px]"
              color="#000000"
              icon={faXTwitter}
            />
          </a>
          <a
            href=""
            className="hover:scale-110 transition-all decoration-black"
          >
            <FontAwesomeIcon
              className="text-[30px]"
              color="#000000"
              icon={faLinkedin}
            />
          </a>
          <a
            href=""
            className="hover:scale-110 transition-all decoration-black"
          >
            <FontAwesomeIcon
              className="text-[30px]"
              color="#000000"
              icon={faInstagram}
            />
          </a>
          <a
            href=""
            className="hover:scale-110  transition-all decoration-black"
          >
            <FontAwesomeIcon
              className="text-[30px]"
              color="#000000"
              icon={faFacebook}
            />
          </a>
        </div>
        <h2 className="text-white font-semibold text-[45px]">
          Welcome to Youth Tech Nexus
        </h2>
        <SearchBar height={"h-[3.5rem]"} listTopMargin={"mt-[400px]"} />
        <Link to={"/events"}>
          <div className="mt-6 cursor-pointer bg-[#FFBC00] h-[45px] text-white flex justify-center items-center px-[20px] rounded-md">
            <h3>Browse Events</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
