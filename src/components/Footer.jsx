import { Link } from "react-router-dom";
import logo from "../assets/images/hero-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 bg-white py-5">
      {/*  */}
      <section className="max-w-[80%]">
        <div>
          <img src={logo} alt="" width={110} />
          <p className="py-3 text-sm text-gray-600">
            &copy; Copyright {year} Bluepreent - Mentors for Mentees
          </p>
        </div>
        <div className="text-sm text-gray-600">
          <Link>Find a mentor</Link> <br />
          <Link>Become a mentor</Link> <br />
          <Link>Help</Link> <br />
        </div>
      </section>
      {/*  */}
      <section className="max-w-[80%] text-sm">
        <div className="pb-3">
          <p className="text-gray-600">Phone</p>
          <p className="text-gray-800">+234 8029 290 1100</p>
        </div>
        <div className="pb-3">
          <p className="text-gray-600">Email</p>
          <Link className="text-primary">support@bluepreent.com</Link>
        </div>
        <div className="pb-3">
          <p className="text-gray-600">Social</p>
          <div className="text-gray-800">
            <Link className="pr-2">Twitter</Link>
            <Link>Facebook</Link>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="max-w-[80%] text-sm">
        <div>
          <p className="text-gray-600">Lagos, Nigeria</p>
          <p className="text-gray-800">Gabriel House, House Island 1102, NG</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
