import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CgMouse } from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";

function Home() {
  return (
    <>
      <section className="home section h-[100vh] snap-center" id="home">
        <div className="container mx-auto px-4 flex items-center justify-center h-[100vh] relative">
          <div className=" mr-28">
            <div className="social-icons flex flex-col gap-8 text-xl text-indigo-500">
              <button>
                <FaLinkedinIn />
              </button>
              <button>
                <FaGithub />
              </button>
              <button>
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-28">
            <div className="leading-loose tracking-widest">
              <div className="text-5xl font-bold flex">
                Hi, I'am&nbsp;<div className="text-indigo-500">Harshal</div>
              </div>
              <div className="text-gray-600 text-lg mt-2 mb-4">
                Frontend Developer
              </div>
              <div className="text-gray-500 leading-relaxed">
                High level experience in web design and <br /> development
                knowledge, producing <br /> quality work.
              </div>
              <br />
              <div>
                <button className="bg-indigo-600 p-[10px] rounded-lg text-white flex items-center gap-2 shadow-lg shadow-gray-600">
                  Contact Me <AiOutlineSend />
                </button>
              </div>
              <button className="flex items-center absolute bottom-10 text-sm">
                <div className="text-indigo-600 text-2xl">
                  <CgMouse />
                </div>
                scroll down
                <div className="text-indigo-600 text-xl">
                  <BsArrowDownShort />
                </div>
              </button>
            </div>
            <div className="h-[340px] w-[350px] pic-bg bg-indigo-600 overflow-hidden flex items-center justify-center shadow-xl shadow-gray-600">
              <img
                src="https://i.ibb.co/ph5w74q/pnge.png"
                alt="/"
                className="imageLink"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
