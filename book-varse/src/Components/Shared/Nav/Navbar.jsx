import { AllLinks } from "../../Data/AllLinks";
import { Navlink } from "./Navlink";
import { RiMenu2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { AiTwotoneCloseCircle } from "react-icons/ai";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mt-3 container">
      <div className="flex items-center gap-5">
        <div className=" lg:hidden">
          <RiMenu2Line
            className="text-2xl"
            onClick={() => {
              setOpen(true);
            }}
          />
          {open && (
            <div className="absolute rounded-b-full top-0 bg-blue-100  pt-6 left-0 p-9 w-full">
              <div className="flex justify-between items-center mb-4">
                <img className="h-11 " src="./image/book-logo.png" />
                <AiTwotoneCloseCircle
                  className="text-3xl"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="flex flex-col items-center">
                {AllLinks.map((link) => (
                  <Navlink key={link.url} {...link}></Navlink>
                ))}
              </div>
            </div>
          )}
        </div>
        <img className="h-11 " src="./image/book-logo.png" />
      </div>
      <div className=" gap-2 hidden lg:flex">
        {AllLinks.map((link) => (
          <Navlink key={link.url} {...link}></Navlink>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden  md:flex gap-2 items-center bg-blue-50  px-5 py-1 rounded-full">
          <IoSearch className="text-slate-500" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <FaUserCircle className="text-blue-900 text-4xl" />
      </div>
    </div>
  );
};
