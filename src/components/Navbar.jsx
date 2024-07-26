import React from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar({ fontColor, hoverColor, padding }) {
  const signup = useRef();
  const button = useRef();
  useEffect(() => {
    if (signup.current && button.current) {
      signup.current.addEventListener("mouseover", () => {
        button.current.style.backgroundColor = hoverColor;
      });
      signup.current.addEventListener("mouseout", () => {
        button.current.style.backgroundColor = "transparent";
      });
    }
  }, [signup]);
  return (
    <>
      <div
        className={
          "w-full pt-3 flex justify-between items-center" + " " + padding
        }
      >
        <div>
          <img className="w-16" src="./logo-100.png" alt="YTN logo" />
        </div>
        <ul
          className={
            "ml-8 w-1/4 list-none flex justify-between" +
            " " +
            "text-" +
            fontColor
          }
        >
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "decoration-" +
                    fontColor +
                    " " +
                    "p-2 border-b-[3px] border-[#FFBC00] border-solid"
                  : "decoration-" + fontColor
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) =>
                isActive
                  ? "decoration-" +
                    fontColor +
                    " " +
                    "p-2 border-b-[3px] border-[#FFBC00] border-solid"
                  : "decoration-" + fontColor
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "decoration-" +
                    fontColor +
                    " " +
                    "p-2 border-b-[3px] border-[#FFBC00] border-solid"
                  : "decoration-" + fontColor
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div
          ref={button}
          className={
            "auth flex w-fit p-2 border-x-2 border-y-2 border-solid rounded-full" +
            " " +
            "text-" +
            fontColor
          }
        >
          <button
            ref={signup}
            className={
              "signup rounded-full p1 px-8 text-center" +
              " " +
              "text-" +
              fontColor
            }
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
