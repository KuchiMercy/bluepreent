import logo from "../assets/images/hero-logo.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="p-4">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="" />
      </Link>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="text-3xl font-semibold text-primary">Ooops!</h1>
        <p className="text-sm my-4 font-medium">
          Page Not Found - You may have lost your way
        </p>
        <Link
          to={"/"}
          className="border-2 rounded-lg px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white font-medium "
        >
          Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
