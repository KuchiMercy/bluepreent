/* eslint-disable react/prop-types */
import { useState } from "react";
import flag from "../assets/icons/NG.png";

const MentorAddWardModal = ({ isOpen, onClose, onAddWard }) => {
  const initialWardData = {
    wardFirstName: "",
    wardLastName: "",
    phoneNumber: "",
    gender: "",
    faculty: "",
    department: "",
    religion: "",
  };
  const [error, setError] = useState({});
  const [wardData, setWardData] = useState(initialWardData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWardData({ ...wardData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!wardData.wardFirstName) {
      newErrors.wardFirstName = "Ward's first name is required.";
    }
    if (!wardData.wardLastName) {
      newErrors.wardLastName = "Ward's last name is required.";
    }
    if (!wardData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    }
    if (!wardData.gender) {
      newErrors.gender = "Gender is required.";
    }
    if (!wardData.faculty) {
      newErrors.faculty = "Faculty selection is required.";
    }
    if (!wardData.department) {
      newErrors.department = "Department selection is required.";
    }
    if (!wardData.religion) {
      newErrors.religion = "Religion selection is required.";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddWard(wardData);
      onClose();
      setWardData(initialWardData);
    }
    setError({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="absolute inset-0  bg-black opacity-50"
      ></div>
      <div className="bg-white shadow-lg rounded-lg w-3/4  md:w-[40%] h-auto z-10 p-6 relative md:ml-14">
        <h2>Add Ward(s)</h2>
        <p>Please tell us about the ward</p>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex gap-3 my-3">
            <div className="w-[50%]">
              {" "}
              <input
                type="text"
                name="wardFirstName"
                placeholder="Wards First Name"
                className="border border-gray-300 py-2 px-1 rounded-md outline-none w-full"
                value={wardData.wardFirstName}
                onChange={handleInputChange}
              />
              {error.wardFirstName && (
                <p className="text-red-500 text-xs">{error.wardFirstName}</p>
              )}
            </div>
            <div className="w-[50%]">
              <input
                type="text"
                name="wardLastName"
                placeholder="Wards Last Name"
                className="border border-gray-300 py-2 px-1 rounded-md outline-none w-full"
                value={wardData.wardLastName}
                onChange={handleInputChange}
              />
              {error.wardLastName && (
                <p className="text-red-500 text-xs">{error.wardLastName}</p>
              )}
            </div>
          </div>
          {/* Number */}
          <div className="flex w-full items-center gap-2 border border-gray-300 py-2 px-1 rounded-md my-3">
            <img src={flag} alt="" />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number (Whatsapp)"
              className="w-full outline-none"
              value={wardData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {error.wardPhoneNumber && (
            <p className="text-red-500 text-xs">{error.wardPhoneNumber}</p>
          )}

          {/* gender */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex justify-between items-center border border-gray-300 py-2 px-1 rounded-md w-[50%] hover:border-gray-500 ">
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                className="outline-none"
                value="male"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-between items-center border border-gray-300 py-2 px-1 rounded-md w-[50%] hover:border-gray-500">
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                className="outline-none"
                value="female"
                onChange={handleInputChange}
              />
            </div>{" "}
          </div>
          {error.gender && (
            <p className="text-red-500 text-xs">{error.gender}</p>
          )}
          {/* Faculty */}
          <select
            name="faculty"
            className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full text-gray-500 bg-white mb-3"
            value={wardData.faculty}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Faculty
            </option>
            <option value="Management">Management</option>
            <option value="Science">Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Health">Health</option>
          </select>
          {error.faculty && (
            <p className="text-red-500 text-xs">{error.faculty}</p>
          )}
          {/* Department */}
          <select
            name="department"
            className="border border-gray-300 py-3 px-2 mb-3 rounded-md outline-none w-full text-gray-500 bg-white"
            value={wardData.department}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Department
            </option>
            <option value="Medicine">Medicine</option>
            <option value="Accounting">Accounting</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
          </select>
          {error.department && (
            <p className="text-red-500 text-xs">{error.department}</p>
          )}

          {/* Religion */}
          <select
            name="religion"
            className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full text-gray-500 bg-white mb-3"
            value={wardData.religion}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select your religion
            </option>
            <option value="Christian">Christian</option>
            <option value="Muslim">Muslim</option>
          </select>
          {error.religion && (
            <p className="text-red-500 text-xs">{error.religion}</p>
          )}
          <button
            type="submit"
            className="flex justify-center mx-auto bg-primary text-white py-2 text-sm rounded my-5 w-full "
          >
            Add Wards
          </button>
          <button
            type="submit"
            onClick={onClose}
            className="flex justify-center mx-auto bg-white text-gray-700 py-2 text-sm rounded my-5 w-full border border-gray-300 "
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default MentorAddWardModal;
