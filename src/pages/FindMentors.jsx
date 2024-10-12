import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import info from "../assets/icons/info.png";
import filter from "../assets/icons/Filter.png";
import MentorsCard from "../components/MentorsCard";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Button from "../ui/Button";
import Dropdown from "../components/Dropdown";
import { useApp } from "../context/useContext";

const FindMentors = () => {
  const { mentors } = useApp();
  const gender = ["Male", "Female"];
  const faculty = ["Management", "Science", "Engineering", "Health"];
  const Department = ["Medicine", "Accounting", "Biology", "Computer Science"];
  const Religion = ["Muslim", "Christian"];
  const ReligiousGroup = ["Catholic Group", "Orthodox", "None"];

  const [reset, setReset] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedReligion, setSelectedReligion] = useState("");
  const [selectedReligiousGroup, setSelectedReligiousGroup] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdowns, setShowDropdowns] = useState(false);

  const handleFilterChange = (setter) => (selected) => {
    setter(selected);
  };

  const handleReset = () => {
    setReset((prev) => !prev);
    setSelectedGender("");
    setSelectedFaculty("");
    setSelectedDepartment("");
    setSelectedReligion("");
    setSelectedReligiousGroup("");
    setSearchTerm("");
  };

  const filteredMentors = mentors.filter((mentor) => {
    const matchesGender = selectedGender
      ? mentor.gender === selectedGender
      : true;
    const matchesFaculty = selectedFaculty
      ? mentor.faculty === selectedFaculty
      : true;
    const matchesDepartment = selectedDepartment
      ? mentor.department === selectedDepartment
      : true;
    const matchesReligion = selectedReligion
      ? mentor.religion === selectedReligion
      : true;
    const matchesReligiousGroup = selectedReligiousGroup
      ? mentor.religiousGroup === selectedReligiousGroup
      : true;
    const matchesSearchTerm = searchTerm
      ? mentor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.school.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return (
      matchesGender &&
      matchesFaculty &&
      matchesDepartment &&
      matchesReligion &&
      matchesReligiousGroup &&
      matchesSearchTerm
    );
  });

  return (
    <>
      {/* Header */}
      <section>
        <h2 className="mt-5 text-primary text-[24px] font-semibold">
          Find Mentors
        </h2>
        <p className="text-gray-700 text-sm">
          Start by selecting one or more categories below
        </p>
      </section>

      {/* Filter Section */}

      <section className="flex flex-col justify-between md:flex-row md:items-center">
        {/* 1 */}
        <section className="flex justify-between items-center  ">
          <div className="flex items-center gap-x-1 my-3 border border-gray-300 rounded-2xl py-1 px-1 md:py-0">
            <CiSearch />
            <input
              type="text"
              placeholder="Search by school or name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none border-none text-sm py-1"
            />
          </div>
          <button
            onClick={() => setShowDropdowns((prev) => !prev)}
            className="md:hidden"
          >
            <img src={filter} alt="" />
          </button>
        </section>
        {/* 2 */}
        <div
          className={`flex flex-col gap-3 md:gap-0 md:flex-row transition-all duration-300 ease-in-out ${
            showDropdowns
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } md:max-h-full md:opacity-100 md:overflow-visible`}
        >
          <Dropdown
            options={gender}
            onSelect={handleFilterChange(setSelectedGender)}
            reset={reset}
            placeholder="Gender"
          />
          <Dropdown
            options={faculty}
            onSelect={handleFilterChange(setSelectedFaculty)}
            reset={reset}
            placeholder="Faculty"
          />
          <Dropdown
            options={Department}
            onSelect={handleFilterChange(setSelectedDepartment)}
            reset={reset}
            placeholder="Department"
          />
          <Dropdown
            options={Religion}
            onSelect={handleFilterChange(setSelectedReligion)}
            reset={reset}
            placeholder="Religion"
          />
          <Dropdown
            options={ReligiousGroup}
            onSelect={handleFilterChange(setSelectedReligiousGroup)}
            reset={reset}
            placeholder="Religious group"
          />
        </div>

        {/* 3 */}
        <div>
          {(selectedGender ||
            selectedFaculty ||
            selectedDepartment ||
            selectedReligion ||
            selectedReligiousGroup ||
            searchTerm) && (
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center text-xs rounded-full border border-primary shadow-sm px-4 py-2 w-full my-2 md:my-0 bg-primary text-white"
            >
              Clear Filters
            </button>
          )}
        </div>
      </section>

      {/* Notice */}
      <div className="flex items-center justify-center gap-1 mt-3 border border-primary py-2">
        <img src={info} alt="info" className="w-5 h-5 animate-pulse" />
        <p
          className={`text-xs ${
            filteredMentors.length === 0 &&
            (selectedGender ||
              selectedFaculty ||
              selectedDepartment ||
              selectedReligion ||
              selectedReligiousGroup ||
              searchTerm)
              ? "text-red-500"
              : "text-primary"
          }`}
        >
          {filteredMentors.length === 0 &&
          (selectedGender ||
            selectedFaculty ||
            selectedDepartment ||
            selectedReligion ||
            selectedReligiousGroup ||
            searchTerm)
            ? "No mentors found for your preferred filter. Kindly take a look at our suggested mentors."
            : "We only charge a token to support the mentors in-charge of these children."}
        </p>
      </div>

      {/* Mentors Data */}
      <div className="my-10">
        {filteredMentors.length === 0 ? (
          <div>
            <main className="my-4">
              <h1 className="font-semibold text-xl text-primary">
                Related Mentors
              </h1>
              <p className="text-xs text-gray-700">
                These are the closest mentors to your search
              </p>
            </main>
            <MentorsCard mentors={mentors} />
          </div>
        ) : (
          <MentorsCard mentors={filteredMentors} />
        )}
      </div>

      {/* Button */}
      {filteredMentors.length > 0 && (
        <div className="flex justify-center my-10">
          <Link to={""}>
            <Button>
              Load mentors <FaChevronDown className="inline text-xs" />{" "}
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default FindMentors;
