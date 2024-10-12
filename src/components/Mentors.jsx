import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Button from "../ui/Button";
import MentorsCard from "./MentorsCard";
import { useApp } from "../context/useContext";

const Mentors = () => {
  const { mentors } = useApp();

  return (
    <>
      <header className="text-center py-10 ">
        <h1 className="text-[36px] font-semibold">
          Take a Look at our{" "}
          <span style={{}} className="text-primary">
            Mentors
          </span>
        </h1>
        <p className="text-[15px] max-w-[80%] md:max-w-[60%] flex mx-auto text-gray-700">
          Our mentors are equipped to give your wards the guidance and coaching
          to help them reach greater heights
        </p>
      </header>

      {/* Mentors Card */}
      <MentorsCard mentors={mentors} />

      {/* Button */}
      <div className="flex justify-center my-10">
        <Link to={"/find-mentor"}>
          <Button>
            Browse all mentors <FaChevronRight className="inline text-xs" />{" "}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Mentors;
