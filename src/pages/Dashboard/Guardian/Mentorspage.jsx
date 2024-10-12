import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";
import emailIcon from "../../../assets/icons/email.png";
import copyIcon from "../../../assets/icons/copy.png";
import whatsappIcon from "../../../assets/icons/whatsapp.png";
import photo from "../../../assets/images/photo7.jpeg";
import photo2 from "../../../assets/images/photo8.jpeg";
import photo3 from "../../../assets/images/photo9.jpeg";
import photo4 from "../../../assets/images/photo10.jpeg";
import photo5 from "../../../assets/images/photo11.jpeg";
import photo6 from "../../../assets/images/photo12.jpeg";
import school from "../../../assets/icons/school.png";
import department from "../../../assets/icons/department.png";

const Mentorspage = () => {
  const [copied, setCopied] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      id: 1,
      name: "Malcom Mason",
      details: {
        initials: "MM",
        image: photo6,
        fullName: "Malcom Mason",
        faculty: "Computer Science",
        school: "University of Lagos",
        phoneNumber: "0819 329 8392",
        emailAddress: "mason@gmail.com",
      },
    },
    {
      id: 2,
      name: "Adeola Omotunyi",
      details: {
        initials: "AO",
        image: photo5,
        fullName: "Alice Omotunyi",
        faculty: "Computer Science",
        school: "Babcock University",
        phoneNumber: "0814 934 8768",
        emailAddress: "alice@gmail.com",
      },
    },
    {
      id: 3,
      name: "Amanda Olise",
      details: {
        initials: "AO",
        image: photo4,
        fullName: "Andrew Olise",
        faculty: "Computer Science",
        school: "University of Lagos",
        phoneNumber: "090 456 8709",
        emailAddress: "olise@gmail.com",
      },
    },
    {
      id: 4,
      name: "James Golden",
      details: {
        initials: "JG",
        image: photo3,
        fullName: "Janet Golden",
        faculty: "Computer Science",
        school: "University of Ilorin",
        phoneNumber: "070 459 0843",
        emailAddress: "janet@gmail.com",
      },
    },
    {
      id: 5,
      name: "Tayo Adeleke",
      details: {
        initials: "TA",
        image: photo2,
        fullName: "Tunde Adeleke",
        faculty: "Computer Science",
        school: "University of Lagos",
        phoneNumber: "070 450 2309",
        emailAddress: "tunde@gmail.com",
      },
    },
    {
      id: 6,
      name: "Salvon Jack",
      details: {
        initials: "SJ",
        image: photo,
        fullName: "Samuel Jack",
        faculty: "Computer Science",
        school: "University of Jos",
        phoneNumber: "080 456 0843",
        emailAddress: "jack@gmail.com",
      },
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleWardClick = (mentorDetails) => {
    setSelectedMentor(mentorDetails);
  };

  return (
    <main className="mx-2 py-5 flex flex-col gap-x-5 gap-y-10 lg:flex-row">
      <section className="shadow-md p-5 lg:w-[60%]">
        <h1 className="text-lg font-semibold">Mentors</h1>
        <p className="text-sm">The mentor&apos;s responsible for your wards</p>
        {/* Mentors Lists */}
        <section className="grid grid-cols-2 text-sm gap-3 my-5">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              whileHover={{
                scale: 1.1,
                // transition: { duration: 1 },
              }}
              className="flex flex-col items-center justify-center border p-2 rounded cursor-pointer active:border-2 active:border-primary"
              onClick={() => handleWardClick(mentor.details)}
            >
              <div className="bg-[#f3def6] rounded-full p-2 w-fit font-medium">
                {mentor.details.initials}
              </div>
              <p className="font-semibold">{mentor.name}</p>
              <p className="text-primary">Computer Science</p>
            </motion.div>
          ))}
        </section>
      </section>
      <section className="lg:w-[40%]">
        <div className="border my-5 px-2">
          <div className="border-b py-3">
            <p className="text-primary font-semibold">Mentors Details</p>
          </div>
          {selectedMentor ? (
            <div className="flex items-center gap-5 pt-3">
              <div>
                {/* Name */}
                <div className="flex items-center gap-5 my-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={selectedMentor.image}
                    alt=""
                  />

                  <div>
                    <p className="text-sm">{selectedMentor.fullName}</p>
                    <p className="text-xs font-medium text-primary">
                      Christian
                    </p>
                  </div>
                </div>

                {/* School Details */}
                <section className="mx-2">
                  <div className="my-2">
                    <div className="flex gap-2">
                      <img src={department} alt="" width={15} />

                      <p className="text-xs font-semibold text-gray-500">
                        Faculty, Department
                      </p>
                    </div>
                    <p className="text-sm ml-6 py-1">
                      {selectedMentor.faculty}
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <img src={school} alt="" width={15} />

                      <p className="text-xs font-semibold text-gray-500">
                        University of Lagos
                      </p>
                    </div>
                    <p className="text-sm ml-6 py-1">{selectedMentor.school}</p>
                  </div>
                </section>
                <h2 className="my-4 px-2 font-medium text-sm">
                  Contact Information
                </h2>
                <section className="flex flex-col mt-3">
                  <div className="flex items-center gap-5 my-4">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        WhatsApp number
                      </p>
                      <p className="text-sm">
                        {selectedMentor.phoneNumber}{" "}
                        <img
                          src={copied ? <IoMdCheckmark /> : copyIcon}
                          alt="Copy"
                          onClick={() => handleCopy(selectedMentor.phoneNumber)}
                          className="inline cursor-pointer"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 my-4">
                    <img src={emailIcon} alt="Email" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        Email Address
                      </p>
                      <p className="text-sm">
                        {selectedMentor.emailAddress}{" "}
                        <img
                          src={copied ? <IoMdCheckmark /> : copyIcon}
                          alt="Copy"
                          onClick={() =>
                            handleCopy(selectedMentor.emailAddress)
                          }
                          className="inline cursor-pointer"
                        />
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <p className="text-center cursor-pointer text-red-600 text-sm font-medium mb-5">
                    Report Mentor
                  </p>
                </section>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-700 py-3">
              Click on a mentor to see contact details.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Mentorspage;
