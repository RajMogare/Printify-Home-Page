import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const NavLinks_Mobile = ({ setMenuOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    useCases: false,
    needHelp: false,
    howworks: false,
  });

  const toggleDropdown = (key, isOpen) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: isOpen,
    }));
  };

  return (
    <div className="p-6 border h-full shadow-md">
      <div className="flex gap-5 items-center justify-center mb-6">
        <h1 className="mr-10 text-center text-3xl font-bold">Menu</h1>
        <RxCross1
          className="text-3xl font-bold cursor-pointer"
          onClick={() => setMenuOpen(false)} // Close menu on X click
        />
      </div>
      <hr />
      <ul className="flex flex-col gap-8 mt-6">
      <li>
          <a href="#" className="hover:text-[#39b75d]">
            Catalog
          </a>
        </li>

        <li
          className="relative group"
          onMouseEnter={() => toggleDropdown("howworks", true)}
          onMouseLeave={() => toggleDropdown("howworks", false)}
        >
          <button className="hover:text-[#39b75d] flex items-center">
            How it works
            <span className="ml-2">
              {dropdownOpen.howworks ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
            </span>
          </button>
          {dropdownOpen.howworks && (
            <ul className="absolute bg-white shadow-lg py-2 mt-2 w-48 top-[42px]">
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">How Printify Works</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Print On Demand</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Printify Quality Promise</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">What to Sell?</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className="hover:text-[#39b75d]">
            Pricing
          </a>
        </li>
        <li
          className="relative group"
          onMouseEnter={() => toggleDropdown("services", true)}
          onMouseLeave={() => toggleDropdown("services", false)}
        >
          <button className="hover:text-[#39b75d] flex items-center">
            Services
            <span className="ml-2">
              {dropdownOpen.services ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
            </span>
          </button>
          {dropdownOpen.services && (
            <ul className="absolute bg-white shadow-lg py-2 mt-2 w-48 top-[42px] z-10">
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Printify Studio</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Printify Express Delivery</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Transfer Products</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Order In Bulk</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Experts Program</a>
              </li>
            </ul>
          )}
        </li>
        <li
          className="relative group"
          onMouseEnter={() => toggleDropdown("useCases", true)}
          onMouseLeave={() => toggleDropdown("useCases", false)}
        >
          <button className="hover:text-[#39b75d] flex items-center">
            Use-cases
            <span className="ml-2">
              {dropdownOpen.useCases ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
            </span>
          </button>
          {dropdownOpen.useCases && (
            <ul className="absolute bg-white shadow-lg py-2 mt-2 w-48 top-[42px] z-10">
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Merch for Fans</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Merch for eCommerce</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Merch for Enterprises</a>
              </li>
              <li className="hover:text-[#39b75d] px-4 py-2">
                <a href="#">Grow Your Store</a>
              </li>
            </ul>
          )}
        </li>
        <li
              className="relative group"
              onMouseEnter={() => toggleDropdown("needHelp", true)}
              onMouseLeave={() => toggleDropdown("needHelp", false)}
            >
              <button className="hover:text-[#39b75d] flex items-center">
                Need help?
                <span className="ml-2">
                  {dropdownOpen.needHelp ? (
                    <RiArrowUpSFill />
                  ) : (
                    <RiArrowDownSFill />
                  )}
                </span>
              </button>
              {dropdownOpen.needHelp && (
                <ul className="absolute bg-white shadow-lg py-2 mt-2 w-48 top-[42px] z-10">
                  <li className="hover:text-[#39b75d] px-4 py-2">
                    <a href="#">Help Center</a>
                  </li>
                  <li className="hover:text-[#39b75d] px-4 py-2">
                    <a href="#">Contacts</a>
                  </li>
                  <li className="hover:text-[#39b75d] px-4 py-2">
                    <a href="#">My Requests</a>
                  </li>
                </ul>
              )}
            </li>

      </ul>
    </div>
  );
};

export default NavLinks_Mobile;
