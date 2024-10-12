import photo from "../../../assets/images/mentor-photo2.jpeg";
import photo2 from "../../../assets/images/mentor-photo3.jpeg";
import photo3 from "../../../assets/images/mentor-photo.jpeg";
import photo4 from "../../../assets/images/photo12.jpeg";
import photo5 from "../../../assets/images/photo11.jpeg";
import photo6 from "../../../assets/images/photo7.jpeg";

const Homepage = () => {
  return (
    <main className="mx-2 my-4 w-[75%]">
      <header className="py-4">
        <h1 className="text-xl">
          Welcome, <b>James Olushola</b>
        </h1>
        <p className="text-sm text-gray-600">jamesolushola@gmail.com</p>
      </header>
      <hr />
      <section className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center gap-2 border py-3 px-2 rounded w-full md:w-[40%] my-7">
          <p className="text-3xl font-medium">2</p>
          <div className="text-xs">
            <p>Number of Mentors</p>
            <p className="text-primary">View mentors</p>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-2 border py-3 px-2 rounded w-full md:w-[40%]">
          <p className="text-3xl font-medium">4</p>
          <div className="text-xs">
            <p>Number of Wards</p>
            <p className="text-primary">View wards</p>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="flex justify-between items-center my-5">
        <div>
          <p className="font-medium">Mentorships</p>
          <p className="text-sm text-gray-500">View all mentorships</p>
        </div>
        {/*  */}
        <button className="bg-primary text-white rounded text-xs py-2 px-3">
          <span>+</span> Find new Mentor
        </button>
      </section>
      <hr />

      {/*  */}
      <section className="flex flex-col items-center justify-between md:flex-row ">
        <div className="border my-5 w-full md:w-[40%] rounded">
          <div className="flex items-center gap-3 border-b py-3 px-2 rounded ">
            <img src={photo} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-sm">James Olushola</p>
              <p className="text-primary text-xs">View Mentor</p>
            </div>
          </div>

          <p className="text-xs text-center font-semibold py-2">
            Ward(s) under mentorship
          </p>
          <div className="flex items-center gap-3 border-b py-3 px-2 rounded ">
            <img src={photo3} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-sm">James Olushola</p>
              <p className="text-primary text-xs">View Mentor</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-3 border-b py-3 px-2 rounded ">
            <img src={photo4} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-sm">Makinwa Olushola</p>
              <p className="text-primary text-xs">Marine Science</p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="border my-5 w-full md:w-[40%] rounded">
          <div className="flex items-center gap-3 border-b py-3 px-2 rounded ">
            <img src={photo2} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-sm">Akinyele Olushola</p>
              <p className="text-primary text-xs">Microbiology</p>
            </div>
          </div>

          <p className="text-xs text-center font-semibold py-2">
            Ward(s) under mentorship
          </p>
          <div className="flex items-center gap-3 border-b py-3 px-2 rounded ">
            <img src={photo5} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-sm">Ifeoluwa Johnson</p>
              <p className="text-primary text-xs">Marine Science</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-3 border-b py-3 px-2 rounded ">
            <img src={photo6} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-sm">Sally Johnson</p>
              <p className="text-primary text-xs">Microbiology</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
