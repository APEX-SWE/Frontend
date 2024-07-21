import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPhone,
  faPhoneAlt,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#110D43] w-full flex justify-around flex-wrap items-center h-[33vh]">
        <div className="flex flex-col gap-4 justify-start items-center text-white">
          <img src="./logo-100.png" className="w-[60px]" alt="YTN logo" />
          <div className="text-[0.8rem] font-light flex flex-col gap-3">
            <p>YTN Copyright@2024</p>
            <p>YTN - All rights Reserved</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start  text-white">
          <h2 className="text-[1rem]">Reach Us</h2>
          <div className="h-[1.3px] w-full bg-white"></div>
          <div className="text-[0.8rem] font-light flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +123 456 7890
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> mail@gmail
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> East
              Legon P.O.Box 32 ST
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start  text-white">
          <h2 className="text-[1rem]">Legal</h2>
          <div className="h-[1.3px] w-full bg-white"></div>
          <div className="text-[0.8rem] font-light flex flex-col gap-3">
            <a href="" className="hover:underline decoration-white">
              Privacy Policy
            </a>
            <a href="" className="hover:underline decoration-white">
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start  text-white">
          <h2 className="text-[1rem]">Follow Us</h2>
          <div className="h-[1.3px] w-full bg-white"></div>
          <div className="text-[0.8rem] font-light flex  gap-3">
            <a
              href=""
              className="hover:scale-110 transition-all decoration-white"
            >
              <FontAwesomeIcon className="mr-2 text-[2rem]" icon={faFacebook} />
            </a>
            <a
              href=""
              className="hover:scale-110 transition-all decoration-white"
            >
              <FontAwesomeIcon
                className="mr-2 text-[2rem]"
                icon={faInstagram}
              />
            </a>
            <a
              href=""
              className="hover:scale-110 transition-all decoration-white"
            >
              <FontAwesomeIcon className="mr-2 text-[2rem]" icon={faLinkedin} />
            </a>
            <a
              href=""
              className="hover:scale-110 transition-all decoration-white"
            >
              <FontAwesomeIcon className="mr-2 text-[2rem]" icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
