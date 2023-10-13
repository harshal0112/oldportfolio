import React from "react";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar(props) {
  return (
    <div className="hidden sm:block shadow-xl top-0 w-full fixed z-10">
      <div className="nav bg-white flex items-center py-4 overflow-x-hidden justify-center px-4 xl:px-24">
        <div className="container flex">
          <div className="flex items-center font-bold">
            <div className="w-auto relative">
              <img
                src="https://i.ibb.co/K908F3Q/H-Logo.png"
                alt=""
                className="w-6 border-2"
              />
            </div>
            Harshal
          </div>
          <div className="flex ml-auto">
            <div className="flex gap-4 lg:gap-8">
              <div>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About
                </Link>
              </div>
              <div>Skills</div>
              <div>Education</div>
              <div>Work</div>
              <div>Contact</div>
              <button className="flex items-center">
                <FaMoon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
