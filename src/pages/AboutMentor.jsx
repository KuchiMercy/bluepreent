import { useParams } from "react-router-dom";
import { useApp } from "../context/useContext";
import verified from "../assets/icons/verified.png";
import department from "../assets/icons/department.png";
import school from "../assets/icons/school.png";
import FilteredMentorsCard from "../components/FilteredMentorsCard";
import MentorsDetailCard from "../components/MentorsDetailCard";

const AboutMentor = () => {
  const { id } = useParams();
  const { mentors } = useApp();

  // Find the mentor by id
  const mentor = mentors.find((mentor) => mentor.id === Number(id));

  if (!mentor) {
    return <p>No mentor found.</p>;
  }

  const filteredMentors = mentors.filter(
    (m) =>
      (m.religion === mentor.religion || m.school === mentor.school) &&
      m.id !== mentor.id
  );
  const limitedMentors = filteredMentors.slice(0, 2);

  return (
    <main className="flex justify-between flex-col md:flex-row my-10 md:my-5">
      {/* 1 */}
      <section className="md:w-[60%]">
        <div className="flex items-center gap-6">
          <img
            src={mentor.image}
            alt={mentor.fullName}
            className="rounded-full h-40 w-40"
          />
          <div>
            <div className="flex items-center">
              <h1 className="font-semibold text-xl">{mentor.fullName}</h1>{" "}
              <img src={verified} alt="" />
            </div>
            <p className="text-xs bg-tertiary rounded text-primary w-fit px-2">
              {mentor.religion}
            </p>

            <div className="mt-5">
              <div className="flex text-primary gap-1 font-semibold text-sm mb-2">
                <img src={department} alt="" width={20} />{" "}
                <p>
                  {mentor.faculty}, {mentor.department}
                </p>
              </div>
              <div className="flex text-primary gap-1 font-semibold text-sm">
                <img src={school} alt="" width={20} /> <p>{mentor.school}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-xl font-bold">About Mentor</p>
          <p className="text-primary text-justify text-sm  md:w-[80%] my-5 leading-6">
            {mentor.about}
          </p>
        </div>
        <div className="my-14">
          <h1 className="font-bold text-xl">Similar Mentors</h1>
          {limitedMentors.length > 0 ? (
            <FilteredMentorsCard filteredMentors={limitedMentors} />
          ) : (
            <p className="text-primary text-sm">
              No similar mentors available yet.
            </p>
          )}
        </div>
      </section>
      {/* 2 */}
      <div className="md:w-[40%]">
        <section className="">
          <MentorsDetailCard />
        </section>
      </div>

      {/* <p className="text-sm">
              {mentor.verified ? (
                <img src={verified} alt="" className="inline" />
              ) : null}
            </p> */}
    </main>
  );
};

export default AboutMentor;
