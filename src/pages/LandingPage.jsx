import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaChevronRight } from "react-icons/fa";
import logo from "../assets/images/hero-logo.png";
import star from "../assets/images/Star 8.png";
import photo from "../assets/images/hero-image.png";
import lines from "../assets/images/hero-lines.png";
import Mentors from "../components/Mentors";
import Testimonial from "../components/Testimonial";
// import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <div className="">
      {/* hero-section */}
      <main className="flex justify-between flex-col md:max-h-[90vh] md:flex-row">
        {/* Hero Text */}
        <section className="max-w-full py-20 md:max-w-[50%]">
          <img
            src={logo}
            alt="bluepreent-logo"
            width={110}
            className="hidden md:block"
          />
          <h1 className="text-primary text-[40px] lg:text-[48px] leading-[3rem] md:pt-4 pb-10 font-semibold">
            Give your kids the academic direction they need.{" "}
            <img src={star} alt="" className="inline animate-spin" />
          </h1>
          <p className="text-gray-700 text-[16px] md:text-[18px]">
            Explore our trusted catalogs of verified, trusted and welcoming
            mentors.
          </p>{" "}
          <div className="border border-primary rounded-3xl px-4 flex justify-between py-2  my-6 md:py-1">
            <div className="flex items-center gap-x-1">
              <CiSearch />
              <input
                type="text"
                placeholder="Enter a university name to begin"
                className="w-full outline-none border-none"
              />
            </div>
            <button className="bg-primary px-4 py-2 rounded-3xl text-white">
              Search
            </button>
          </div>
        </section>
        {/* Hero Image */}
        <section className="md:relative -z-50">
          <img src={lines} alt="" className="hidden md:block" />
          <img
            src={photo}
            alt=""
            width={450}
            className="md:absolute md:top-0 md:right-0"
          />
        </section>
      </main>

      {/* Mentors Section */}
      <Mentors />

      {/* Testimonial */}
      <Testimonial />

      {/* Section */}

      <section className="text-center pt-10 pb-3 bg-[#F1FAFF] my-5 ">
        <h1 className="text-[26px] md:text-[36px] font-semibold">
          Mentors shape lives to be better
        </h1>
        <p className="text-[15px] max-w-[80%] md:max-w-[60%] flex mx-auto text-gray-700">
          Its not too late to start, try giving your children mentors to help
          them excel and have a better future
        </p>
        <div className="flex justify-center mt-5 mb-10">
          <Link to={"/find-mentor"}>
            <Button>
              Find a mentor <FaChevronRight className="inline text-xs" />{" "}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
