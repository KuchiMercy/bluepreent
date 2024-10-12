import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/hero-logo.png";
import { IoChevronDownOutline, IoMenuOutline, IoClose } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden lg:flex justify-between items-center py-5 sticky top-0 z-50 bg-white">
        <div>
          <img src={logo} alt="blueprint-logo" width={110} />
          <p className="text-[10px] text-quaternary">Mentorship</p>
        </div>
        <div className="flex items-center text-sm">
          <div className="flex items-center justify-between bg-tertiary px-3 py-2 mr-3 text-secondary font-bold">
            <p>Mentorship</p>
            <IoChevronDownOutline />
          </div>
          <div className="h-8 w-[2px] bg-gray-500 mr-3 "></div>
          <div className=" flex items-center text-quaternary px-2 py-2 mr-3">
            <MdOutlinePhoneInTalk className="px-1 text-2xl" />
            <p>Contact us</p>
          </div>
          <Link
            to={"/find-mentor"}
            className=" flex items-center text-quaternary px-2 py-2 mr-3"
          >
            <CiSearch className="px-1 text-2xl" />
            <p>Find Mentor</p>
          </Link>

          <Link
            to={"/login-mentor"}
            className="text-sm rounded font-semibold hover:scale-105 px-6 py-2 bg-tertiary text-secondary mx-2"
          >
            Login
          </Link>

          <Link
            to={"/signup-mentor"}
            className="text-sm rounded font-semibold hover:scale-105 px-4 py-2 bg-primary text-white"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* MobileNavbar */}
      <div className="sticky top-0  bg-white flex justify-between items-center pt-5 lg:hidden sidebar ">
        <img src={logo} alt="blueprint-logo" width={110} />
        <button
          type="button"
          onClick={() => setNavMenu(!navMenu)}
          className="text-2xl"
        >
          {navMenu ? <IoClose /> : <IoMenuOutline />}
        </button>
      </div>

      <header
        className={`flex flex-col w-[75%] md:w-[50%] py-5 h-[100vh]  bg-white lg:hidden fixed top-11 overflow-y-auto z-50 ${
          navMenu
            ? "block transition-transform duration-500 ease-in-out transform translate-x-0 opacity-100"
            : " invisible opacity-0 -translate-x-full"
        }`}
      >
        <div className=" text-sm">
          <div className="flex items-center justify-between bg-tertiary px-3 py-2 mr-3 text-secondary font-bold mt-3">
            <p>Mentorship</p>
            <IoChevronDownOutline />
          </div>
          <div className=" flex items-center text-quaternary px-2 py-2 mr-3">
            <MdOutlinePhoneInTalk className="px-1 text-2xl" />
            <p>Contact us</p>
          </div>
          <Link
            to={"/find-mentor"}
            className=" flex items-center text-quaternary px-2 py-2 mr-3"
          >
            <CiSearch className="px-1 text-2xl" />
            <p>Find Mentor</p>
          </Link>

          <Link to={"/login-mentor"}>
            <button className="text-sm rounded font-semibold hover:scale-105 px-6 py-2 bg-tertiary text-secondary my-2 w-full">
              Login
            </button>
          </Link>

          <Link to={"/signup-mentor"}>
            <button className="text-sm rounded font-semibold hover:scale-105 px-4 py-2 bg-primary text-white w-full">
              Sign Up
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
