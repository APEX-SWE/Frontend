import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="w-full gap-40 h-[70vh] flex items-center justify-center">
        <div className="flex flex-col h-[60%] justify-between ">
          <div className="flex gap-2 items-center">
            <div className="w-[70px] h-[70px] text-[1.4rem] flex justify-center items-center rounded-full bg-[#D7D7D7]">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p className="text-[rem]">+123 456 7890</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[70px] h-[70px] text-[1.4rem] flex justify-center items-center rounded-full bg-[#D7D7D7]">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className="text-[rem]">mail@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[70px] h-[70px] text-[1.4rem] flex justify-center items-center rounded-full bg-[#D7D7D7]">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p className="text-[rem]">East Legon P.O.Box 32 ST</p>
          </div>
        </div>
        <div className="flex-col flex gap-5">
          <h2 className="text-[2rem] text-[#757575]">Contact Us</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter your first name..."
              className="w-[200px] h-[50px] border-2 border-[#D7D7D7] rounded-md px-4"
            />
            <input
              type="text"
              placeholder="Enter your last name..."
              className="w-[200px] h-[50px] border-2 border-[#D7D7D7] rounded-md px-4"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full h-[50px] border-2 border-[#D7D7D7] rounded-md px-4"
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Enter your message..."
              className="w-full h-[170px] border-2 border-[#D7D7D7] rounded-md px-4 py-2"
            ></textarea>
          </div>
          <button className="w-[150px] h-[50px] bg-[#FFBC00] text-white text-center rounded-md">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
