import React from "react";
import { useEffect, useRef } from "react";
export default function Navbar() {
  const signup = useRef();
  const button = useRef();
  useEffect(() => {
    if (signup.current && button.current) {
      signup.current.addEventListener("mouseover", () => {
        button.current.style.backgroundColor = "#144ABE43";
      });
      signup.current.addEventListener("mouseout", () => {
        button.current.style.backgroundColor = "transparent";
      });
    }
  }, [signup]);
  return (
    <>
      <div className="w-full pt-3 flex justify-between items-center">
        <div>
          <img className="w-16" src="./logo-100.png" alt="YTN logo" />
        </div>
        <ul className="ml-8 text-white w-1/4 list-none flex justify-between">
          <li>
            <a
              href=""
              className="p-2 decoration-white border-b-[3px] border-[#FFBC00] border-solid "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className=" decoration-white p-2 hover:border-b-[3px] hover:border-[#FFBC00] hover:border-solid"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href=""
              className="decoration-white p-2 hover:border-b-[3px] hover:border-[#FFBC00] hover:border-solid"
            >
              About Us
            </a>
          </li>
        </ul>
        <div
          ref={button}
          className="auth flex w-fit p-2 border-x border-y border-white border-solid rounded-full"
        >
          <button
            ref={signup}
            className="signup text-white rounded-full p1 px-8 text-center"
          >
            <p>Sign up</p>
          </button>
          <button className="login text-white rounded-full p-1 px-8 bg-[#FFBC00]">
            <p>Login</p>
          </button>
        </div>
      </div>
    </>
  );
}
