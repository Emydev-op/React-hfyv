import hflogo from "../../assets/hflogo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
//Popup booking
import Booking from "../Popup/Booking";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-40 backdrop-blur bg-white border-gray-200 dark:bg-gray-900">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <NavLink
          onClick={() => setOpen(false)}
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse max-w-[8rem]"
        >
          <img src={hflogo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
            HFYV
          </span>
        </NavLink>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="dark:text-white text-gray-800 m-2 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="dark:text-white text-gray-800 m-2 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-gray-900 font-normal md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Booking
              trigger={
                <span className=" dark:text-white text-gray-800 hover:text-gray-400 duration-500">
                  How To Book
                </span>
              }
            />
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              onClick={() => setOpen(false)}
              to="/gallery"
              className="text-gray-800 dark:text-white  hover:text-gray-400 duration-500"
            >
              Gallery
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              onClick={() => setOpen(false)}
              to="/faq"
              className="dark:text-white text-gray-800 hover:text-gray-400 duration-500"
            >
              FAQ
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              onClick={() => setOpen(false)}
              to="/about"
              className="dark:text-white text-gray-800 hover:text-gray-400 duration-500"
            >
              About
            </NavLink>
          </li>
          <button className="bg-[#BF4E03] text-white font-sans font-bold py-2 px-6 rounded-full md:ml-8 hover:bg-indigo-400 duration-500">
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
