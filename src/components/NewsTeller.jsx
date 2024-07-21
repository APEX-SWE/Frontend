import React from "react";

export default function NewsTeller() {
  return (
    <>
      <div className="w-full bg-[#FFE8E8] h-[34vh] flex flex-col items-center justify-center">
        <h1 className="text-[2rem] font-semibold">SUBSCRIBE NOW!</h1>
        <p className="text-[1rem] text-[#a0a0a0] my-2">
          To get updated on any news and event
        </p>
        <div className="w-[60%] flex justify-center ">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full h-[60px] border-2 border-[#D7D7D7] rounded-s-[10px] focus:outline-none px-4"
          />
          <button className="w-[200px] h-[60px] bg-[#FFBC00] text-white text-center rounded-e-[10px]">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
