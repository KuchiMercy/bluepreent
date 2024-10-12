import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../../assets/images/mentor-photo2.jpeg";

const Settingspage = () => {
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(profile);
  const handleChangePicture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <main className="mx-2 py-5 mb-10  gap-x-5 gap-y-10 md:w-[60%] ">
      <h1 className="font-bold text-xl">Settings</h1>
      <p className="text-sm text-gray-500 mb-6">
        Make changes to things that matter to you
      </p>

      <div>
        <h2 className="font-semibold text-lg">Personal Information</h2>
        <div className="flex items-center gap-2 my-2">
          <img
            src={photo}
            alt="profile-photo"
            className="w-14 h-14 rounded-full"
          />
          <button
            onClick={handleChangePicture}
            className="text-primary text-sm"
          >
            Change Picture
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <section>
          {/*  */}
          <div className="flex justify-between items-center gap-3 my-2">
            <div className="border w-[50%] p-1 rounded">
              <p className="text-gray-400 text-xs">First Name</p>
              <p className="text-sm">James</p>
            </div>
            {/*  */}
            <div className="border w-[50%] p-1 rounded">
              <p className="text-gray-400 text-xs">Last Name</p>
              <p className="text-sm">Olushola</p>
            </div>
          </div>
          <div className="border p-1 rounded my-2">
            <p className="text-gray-400 text-xs">Email Address</p>
            <p className="text-sm">jamesolushola@gmail.com</p>
          </div>
          <div className="border p-1 rounded my-2">
            <p className="text-gray-400 text-xs">Phone Number</p>
            <p className="text-sm">+234 902 931 1001</p>
          </div>

          <div className="my-5">
            <p className="text-gray-400 text-xs">Residential Address</p>
            <p className="text-sm text-justify">
              14, Onamide Crescent, Akinyele Street.
            </p>
          </div>

          <button className="w-full bg-primary text-white my-3 rounded text-sm py-2 cursor-not-allowed">
            Save Changes
          </button>
        </section>
        {/*  */}

        <hr className="my-5" />
        <h2 className="font-semibold text-lg mb-5">Security</h2>
        <Link
          to={"/reset-password"}
          className="text-primary border rounded px-1 py-2 text-sm"
        >
          Change Password
        </Link>
      </div>
    </main>
  );
};

export default Settingspage;
