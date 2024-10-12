/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import home from "../../assets/icons/Home.png";
import user from "../../assets/icons/user.png";
import addUser from "../../assets/icons/AddUser.png";
import setting from "../../assets/icons/Setting.png";
import logout from "../../assets/icons/Logout.png";
import verified from "../../assets/icons/verified.png";

const Sidebar = ({
  fullName,
  link1,
  link2,
  link3,
  link4,
  link5,
  linkName,
  profile,
}) => {
  return (
    <>
      {/* Desktop Menu */}
      <div className=" hidden md:flex flex-col h-[90vh] justify-between py-5 px-10 border-r">
        <main className=" ">
          <section className="flex items-center gap-2 pb-5 border-b">
            <img src={profile} alt="" className="rounded-full w-10 h-10" />
            <div>
              <h3 className="font-semibold">{fullName}</h3>
              <div className="flex items-center text-sm">
                <p>Verified</p>
                <img src={verified} alt="" />
              </div>
            </div>
          </section>

          <section className="text-gray-600 text-sm pb-5 border-b">
            <div className="flex items-center py-3 gap-2 ">
              <img src={home} alt="" />{" "}
              <Link
                className=" hover:text-primary focus:text-primary"
                to={link1}
              >
                Home
              </Link>
            </div>
            <div className="flex items-center py-3 gap-2">
              <img src={user} alt="" />{" "}
              <Link
                className=" hover:text-primary focus:text-primary"
                to={link2}
              >
                Wards
              </Link>
            </div>
            <div className="flex items-center  py-3 gap-2">
              <img src={addUser} alt="" />{" "}
              <Link
                className=" hover:text-primary focus:text-primary"
                to={link3}
              >
                {linkName}
              </Link>
            </div>
          </section>
        </main>
        {/*  */}
        <section className="text-gray-600 text-sm">
          <div className="flex items-center py-3 gap-2">
            <img src={setting} alt="" /> <Link to={link4}>Settings</Link>
          </div>
          <div className="flex items-center py-3 gap-2">
            <img src={logout} alt="" /> <Link to={link5}>Log Out</Link>
          </div>
        </section>
      </div>

      {/* Mobile Menu */}
      <section className="fixed bottom-0 flex items-center bg-white w-full justify-evenly py-2 md:hidden">
        <Link to={link1} className="flex flex-col items-center">
          <img src={home} alt="" />
          <p className="text-sm text-gray-800 hover:text-primary focus:text-primary">
            Home
          </p>
        </Link>
        {/*  */}
        <Link to={link2} className="flex flex-col items-center ">
          <img src={user} alt="" />
          <p className="text-sm text-gray-800 hover:text-primary focus:text-primary">
            Wards
          </p>
        </Link>
        <Link to={link3} className="flex flex-col items-center">
          <img src={addUser} alt="" />
          <p className="text-sm text-gray-800 hover:text-primary focus:text-primary">
            Request
          </p>
        </Link>
        <Link to={link4} className="flex flex-col items-center ">
          <img src={setting} alt="" />
          <p className="text-sm text-gray-800 hover:text-primary focus:text-primary">
            Settings
          </p>
        </Link>
      </section>
    </>
  );
};

export default Sidebar;
