import React, { useState } from "react";
import {
  FaBriefcase,
  FaFileAlt,
  FaGraduationCap,
  FaHome,
  FaMoon,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function NavbarBottom() {
  const [isBottomMenu, setIsBottomMenu] = useState("close");
  return (
    <div>
      {isBottomMenu === "open" && (
        <motion.div
          className="bg-white px-6 py-4 grid grid-cols-3 grid-rows-2 gap-8 absolute bottom-12 w-full text-base sm:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "tween" }}
        >
          <div className="flex flex-col items-center justify-center ">
            <div>
              <FaHome />
            </div>
            <h1>Home</h1>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div>
              <FaUser />
            </div>
            <h1>About</h1>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div>
              <FaFileAlt />
            </div>
            <h1>Skills</h1>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div>
              <FaGraduationCap />
            </div>
            <h1>Education</h1>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div>
              <FaBriefcase />
            </div>
            <h1>Work</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <FaPaperPlane />
            </div>
            <h1>Contact</h1>
          </div>
        </motion.div>
      )}
      <div className="flex bg-white px-6 py-4 absolute w-full bottom-0 sm:hidden shadow-2xl shadow-black">
        <div className={`${isBottomMenu === "open" ? "hidden" : ""}`}>
          Harshal
        </div>
        <div className="flex ml-auto gap-4">
          <button className={`${isBottomMenu === "open" ? "hidden" : ""}`}>
            <FaMoon />
          </button>
          <button
            onClick={() =>
              setIsBottomMenu(isBottomMenu === "open" ? "close" : "open")
            }
          >
            {isBottomMenu === "open" ? <AiOutlineClose /> : <BsGrid />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarBottom;
