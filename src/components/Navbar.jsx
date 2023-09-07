import React, { useState } from 'react'
import logo from '/assets/logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { links, socials } from '../utils'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* SIDEBAR FOR MOBILE VERSION */}
      <aside
        className={`top-0 right-0 w-full ease-linear duration-200 bg-white text-black fixed h-full z-40 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-end m-4">
            <AiOutlineClose
              className="text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          {/* gray line */}
          <div className="h-10 border-b-2 border-gray-500"></div>
          {/* links */}
          <div className="flex flex-col text-center space-y-10 mt-10">
            {links.map((link) => {
              return (
                <Link
                  to={link.url}
                  className="text-2xl font-semibold"
                  key={link.id}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          {/* socials */}
          <div className="flex justify-evenly mt-20">
            {socials.map((item) => {
              return (
                <Link
                  to={item.url}
                  className="text-2xl"
                  key={item.id}
                  target="_blank"
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
      {/* END OF SIDEBAR */}
      <div className=" z-20 w-full sticky top-0 h-[4rem] bg-[#6495ED] flex items-center justify-between shadow-md shadow-[#6495ED">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[50%] lg:w-[20%] lg:ml-10 h-full lg:cursor-pointer"
          />
        </Link>
        <AiOutlineMenu
          className="w-[4rem] h-[4rem] text-white mr-3 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
        {/* links for desktop navbar */}
        <div className="hidden lg:flex">
          {links.map((item) => {
            return (
              <Link
                to={item.url}
                key={item.id}
                className={`mr-10 font-semibold text-xl text-white ${
                  item.name === "Home" ? "hidden" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar