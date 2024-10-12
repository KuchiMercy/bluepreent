import { useApp } from "../../../context/useContext";
import verified from "../../../assets/icons/verified.png";
import department from "../../../assets/icons/department.png";
import school from "../../../assets/icons/school.png";

const Home = () => {
  const { mentors } = useApp();
  if (mentors.length === 0) {
    return <p>No mentors available.</p>;
  }
  const mentor = mentors[0];
  return (
    <main className="mx-2 py-5 flex flex-col gap-x-5 gap-y-10 lg:flex-row">
      <section className="shadow-md p-5 lg:w-[60%]">
        <div key={mentor.id} className="flex items-center gap-6">
          <img
            src={mentor.image}
            alt={mentor.fullName}
            className="rounded-full h-20 w-20"
          />
          <div>
            <div className="flex items-center">
              <h1 className="font-semibold text-xl">{mentor.fullName}</h1>{" "}
              <img src={verified} alt="" />
            </div>
            <p className="text-xs bg-tertiary rounded text-primary w-fit px-2">
              {mentor.religion}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex gap-1 font-medium text-sm mb-2">
            <img src={department} alt="" width={20} />{" "}
            <p>
              {mentor.faculty}, {mentor.department}
            </p>
          </div>
          <div className="flex gap-1 font-medium text-sm">
            <img src={school} alt="" width={20} /> <p>{mentor.school}</p>
          </div>
        </div>
        <hr className="my-4" />
        <h3 className="font-bold my-2">Biography</h3>
        <p className="text-sm text-justify text-gray-700">{mentor.about}</p>
        <hr className="my-4" />
        {/* Wards */}
        <div>
          <h2 className="font-semibold text-lg pb-4">Wards</h2>
          <section className="grid grid-cols-2 text-sm gap-3">
            <div className="flex flex-col items-center justify-center border p-2 rounded">
              <div className="bg-[#f3def6] rounded-full p-2 w-fit font-medium">
                MM
              </div>
              <p className="font-semibold">Malcom Mason</p>
              <p className="text-primary">Computer Science</p>
            </div>
            <div className="flex flex-col items-center justify-center border p-2 rounded">
              <div className="bg-[#eaedef] rounded-full p-2 w-fit font-medium">
                AO
              </div>
              <p className="font-semibold">Adeola Omotunyi</p>
              <p className="text-primary">Computer Science</p>
            </div>
            <div className="flex flex-col items-center justify-center border p-2 rounded">
              <div className="bg-[#eaedef] rounded-full p-2 w-fit font-medium">
                AO
              </div>
              <p className="font-semibold">Amanda Olise</p>
              <p className="text-primary">Computer Science</p>
            </div>
            <div className="flex flex-col items-center justify-center border p-2 rounded">
              <div className="bg-[#a0d9fb] rounded-full p-2 w-fit font-medium">
                JG
              </div>
              <p className="font-semibold">James Golden</p>
              <p className="text-primary">Computer Science</p>
            </div>
          </section>
        </div>
      </section>
      {/*  */}
      {/* div */}
      <section className="lg:w-[40%] ">
        <div className="bg-[#0a2433] p-4 rounded">
          <p className="text-white text-sm">Analytics</p>
          <div className="flex items-center gap-2 ">
            <p className="text-[40px] text-[#80d014]">26%</p>
            <p className="text-white text-sm leading-5">
              Increase in wards this <b>month</b> congrats!
            </p>
          </div>
        </div>
        {/*  */}
        <div className="border my-5 px-5">
          <div className="flex justify-between items-center border-b  py-3">
            <p className="font-semibold">Ward Requests</p>
            <p className="text-primary">View All</p>
          </div>
          <div className="flex items-center gap-5 border-b  py-3">
            <div className="border rounded-full p-2 font-semibold">AO</div>
            <div>
              <p className="font-semibold text-gray-700">Adeola Omotunyi</p>
              <p className="text-gray-500 text-sm">Computer Science</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-5 border-b  py-3">
            <div className="border rounded-full p-2 font-semibold">MM</div>
            <div>
              <p className="font-semibold text-gray-700">Malcom Mason</p>
              <p className="text-gray-500 text-sm">Mathematics Science</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-5 border-b  py-3">
            <div className="border rounded-full p-2 font-semibold">JG</div>
            <div>
              <p className="font-semibold text-gray-700">James Golden</p>
              <p className="text-gray-500 text-sm">Geology Science</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-5 border-b  py-3">
            <div className="border rounded-full p-2 font-semibold">JG</div>
            <div>
              <p className="font-semibold text-gray-700">James Golden</p>
              <p className="text-gray-500 text-sm">Geology Science</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
