import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function AboutOverview() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("./about-bg.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[500px] w-full object-cover flex flex-col justify-center items-center"
      >
        <h2 className="text-white text-[3rem] mb-[30px] font-semibold text-center">
          About Us
        </h2>
        <p className="text-[#e0e0e0] text-[1.1rem] font-light text-center w-[1000px]">
          Lorem ipsum dolor sit amet consectetur. Tincidunt nec eu nunc aliquet.
          Parturient nunc turpis at nisi vitae vitae eget arcu. Morbi fermentum
          arcu vestibulum ultrices quisque. Imperdiet amet cursus diam id. Nulla
          tincidunt ac risus a. Id sed vel molestie ante urna enim iaculis
          gravida. Quam in sit tincidunt duis magnis ullamcorper blandit ornare
          ornare.
        </p>
        <div className="flex gap-6 mt-[25px]">
          <FontAwesomeIcon
            className="text-[30px]"
            color="#FFBC00"
            icon={faXTwitter}
          />
          <FontAwesomeIcon
            className="text-[30px]"
            color="#FFBC00"
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            className="text-[30px]"
            color="#FFBC00"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-[30px]"
            color="#FFBC00"
            icon={faFacebook}
          />
        </div>
        <div>
          <button className="mt-8 mb-8 w-[200px] h-[50px] bg-[#FFBC00] text-white text-center rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
