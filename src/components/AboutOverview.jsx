import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { admins } from "../data/AdminData";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
          <button className="mt-8 mb-8 w-[150px] h-[50px] bg-[#FFBC00] text-white text-center rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full flex bg-[#FFE8E8] items-center justify-center">
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          slidesPerView={3}
          navigation
          spaceBetween={30}
          className="w-[70%] h-[70vh] flex items-center justify-center"
        >
          {admins.map((admin) => (
            <SwiperSlide
              key={admin.id}
              className="flex flex-col items-center justify-center"
            >
              <img
                className="w-[200px] h-[200px] rounded-full"
                src={admin.image}
                alt={admin.name}
              />
              <h3 className="text-black text-[1.5rem] font-semibold">
                {admin.name}
              </h3>
              <p className="text-[#242424] text-[1rem] font-normal mb-2">
                {admin.role}
              </p>
              <p className="text-[#4a4a4a] text-[0.8rem] text-center font-light w-[250px]">
                {admin.about}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full bg-[#d8d8d8] h-[1px]"></div>
    </>
  );
}
