import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import notification from "../assets/icons/Notification.png";
import Sidebar from "../pages/Dashboard/Sidebar";
import photo from "../assets/images/photo1.jpeg";

/* eslint-disable react/prop-types */
const MentorDashboardLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-[90%] mx-auto">
      {/* Navbar */}
      <div className="flex justify-end py-3 px-4 shadow">
        <img src={notification} alt="" width={25} />
      </div>
      {/* Sidebar and Main */}
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <Sidebar
            fullName={"Ifunanya Chigozie"}
            linkName={"Requests"}
            link1={"/mentor-dashboard"}
            link2={"/mentor-dashboard/wards"}
            link3={"/mentor-dashboard/requests"}
            link4={"/mentor-dashboard/settings"}
            profile={photo}
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className=" col-span-3 md:col-span-2"
        >
          {children}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MentorDashboardLayout;
