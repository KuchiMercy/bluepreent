import { motion } from "framer-motion";
import image from "../../../assets/images/photo5.jpeg";
import photo1 from "../../../assets/images/photo6.jpeg";
import photo2 from "../../../assets/images/photo7.jpeg";
import photo3 from "../../../assets/images/photo8.jpeg";
import menu from "../../../assets/icons/menu.png";

const Wardspage = () => {
  const wards = [
    {
      id: 1,
      photo: image,
      fullName: "James Olushola",
      email: "james@gmail.com",
    },
    {
      id: 2,
      photo: photo1,
      fullName: "Bolanle Hassan",
      email: "hassan@gmail.com",
    },
    {
      id: 3,
      photo: photo2,
      fullName: "Solomon John",
      email: "john@gmail.com",
    },
    {
      id: 4,
      photo: photo3,
      fullName: "James Olushola",
      email: "james@gmail.com",
    },
  ];
  return (
    <main className="mb-20">
      <header className="flex justify-between my-5">
        <div>
          <p className="font-medium text-xl">Wards</p>{" "}
          <p className="text-gray-500 text-sm">View all your current wards</p>
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          className="bg-primary text-white rounded font-medium px-3 text-xs"
        >
          <span>+</span> Add New Ward
        </motion.button>
      </header>
      <hr className="my-10" />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {wards.map((ward) => (
          <div key={ward.id} className="border p-3 shadow">
            {" "}
            <div>
              <div className="flex justify-between items-center">
                <img
                  src={ward.photo}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <img src={menu} alt="" />
              </div>
              <p className="text-sm font-medium">{ward.fullName}</p>
              <p className="text-xs text-[#4e9d21]">Active</p>
            </div>
            <hr className="my-2" />
            <div>
              <p className="text-gray-500 text-xs">School</p>
              <p className="text-gray-800 text-sm">University of Lagos</p>
            </div>
            <hr className="my-2" />
            <div>
              <p className="text-gray-500 text-xs">Faculty</p>
              <p className="text-gray-800 text-sm">Science</p>
            </div>
            <hr className="my-2" />
            <div>
              <p className="text-gray-500 text-xs">Department</p>
              <p className="text-gray-800 text-sm">Computer Science</p>
            </div>
            <hr className="my-2" />
            <div>
              <p className="text-gray-500 text-xs">Email Address</p>
              <p className="text-gray-800 text-sm">{ward.email}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Wardspage;
