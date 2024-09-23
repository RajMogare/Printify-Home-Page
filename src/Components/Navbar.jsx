import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";
import NavLinks_Mobile from "./NavLinks_Mobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".mobile-menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div>
      <nav className="bg-white py-4 shadow-md w-full fixed top-0 md:px-20 z-10">
        <div className="flex justify-between items-center px-4 md:px-0">
          {/* Left Side: Logo */}
          <div className="text-xl font-bold flex items-center gap-2">
            {/* Mobile Menu Icon */}
            <div className="md:hidden ml-4" onClick={handleMenuToggle}>
              {menuOpen ? (
                <AiOutlineClose size={28} className="cursor-pointer" />
              ) : (
                <AiOutlineMenu size={28} className="cursor-pointer" />
              )}
            </div>
            <a href="/">
              <img
                src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
                alt="Logo"
                className="w-18 h-10"
              />
            </a>
          </div>
          <NavLinks />
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="hover:bg-gray-100 border border-gray-300 text-gray-600 py-1 px-4 rounded-md"
            >
              Log In
            </a>
            <a
              href="#"
              className="bg-[#39b75d] hover:bg-[#2a9d56] text-white py-1 px-4 rounded-md"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            menuOpen ? "left-0" : "-left-full"
          } fixed top-0 z-20 w-[250px] h-full bg-white transition-all duration-300 ease-in-out md:hidden mobile-menu`}
        >
          <NavLinks_Mobile setMenuOpen={setMenuOpen} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
