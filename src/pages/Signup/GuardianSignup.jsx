import { useState } from "react";
import Lottie from "lottie-react";
import accountCreated from "../../ui/account-created.json";
import GuardianModal from "../../modals/GuardianSignupModal";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import flag from "../../assets/icons/NG.png";
import mail from "../../assets/icons/Message.png";
import location from "../../assets/icons/location.png";
import password from "../../assets/icons/Shield.png";
import FormCard from "../FormCard";

const GuardianSignup = () => {
  const navigate = useNavigate();

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  };

  const secondFormState = {
    wardFirstName: "",
    wardLastName: "",
    wardPhoneNumber: "",
    wardEmail: "",
    gender: "",
    faculty: "",
    department: "",
    religion: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [secondFormData, setSecondFormData] = useState(secondFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wards, setWards] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);

  // password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  // First form Validation
  const validateFirstForm = () => {
    const newErrors = {};

    // FirstName validation
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    // lastName validation
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    // email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    // password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    // gender validation
    if (!formData.address) newErrors.address = "Address is required.";
    // Phone number validation
    const phoneNumberWithoutPlus = formData.phoneNumber.replace(/^\+/, ""); // Remove leading +
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (
      !/^\+?\d+$/.test(formData.phoneNumber) ||
      phoneNumberWithoutPlus.length < 11
    ) {
      newErrors.phoneNumber =
        "Phone number must be at least 11 digits long and may start with a '+'.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFirstFormSubmit = (e) => {
    e.preventDefault();

    if (validateFirstForm()) {
      setShowSecondForm(true);
    }
  };

  // Second form Validation

  const validateSecondForm = () => {
    const newErrors = {};

    //  Name validation
    if (!secondFormData.wardFirstName)
      newErrors.wardFirstName = "First name is required.";
    if (!secondFormData.wardLastName)
      newErrors.wardLastName = "Last name is required.";
    // Phone number validation
    const phoneNumberWithoutPlus = secondFormData.wardPhoneNumber.replace(
      /^\+/,
      ""
    ); // Remove leading +
    if (!secondFormData.wardPhoneNumber) {
      newErrors.wardPhoneNumber = "Phone number is required.";
    } else if (
      !/^\+?\d+$/.test(secondFormData.wardPhoneNumber) ||
      phoneNumberWithoutPlus.length < 11
    ) {
      newErrors.wardPhoneNumber =
        "Phone number must be at least 11 digits long and may start with a '+'.";
    }
    // Gender validation
    if (!secondFormData.gender) newErrors.gender = "Gender is required.";
    // Faculty validation
    if (!secondFormData.faculty) newErrors.faculty = "Faculty is required.";
    // Department validation
    if (!secondFormData.department)
      newErrors.department = "Department is required.";
    // Religion validation
    if (!secondFormData.religion) newErrors.religion = "Religion is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const MAX_WARDS = 4;

  const handleSecondFormSubmit = (e) => {
    e.preventDefault();
    // validate second form
    if (!validateSecondForm()) return;
    // Check if maximum wards limit is reached
    if (wards.length >= MAX_WARDS) {
      alert("Maximum amount of wards reached.");
      return;
    }
    setWards((prevWards) => [...prevWards, { ...secondFormData }]);
    // both form submission
    const combinedFormData = {
      ...formData,
      ...secondFormData,
    };
    console.log("Form submitted successfully:", combinedFormData);

    // Reset all data and state if needed
    setFormData(initialState);
    setSecondFormData(secondFormState);
    handleCloseModal();
  };

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error for the specific field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    // Allowing input of digits and '+' sign for phone number
    if (name === "wardPhoneNumber") {
      const NumberValue = value.replace(/[^0-9+]/g, ""); // Allow only numbers and '+'
      setSecondFormData((prevData) => ({
        ...prevData,
        [name]: NumberValue,
      }));
    } else if (name in formData) {
      // Handle changes for the first form
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // Handle changes for the second form
      setSecondFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setShowSecondForm(false);
    setFormData(initialState);
    setSecondFormData(secondFormState);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };
  const createAccount = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      navigate("/guardian-dashboard");
    }, 3000);
  };
  return (
    <main className="flex h-[100vh] w-[95%] mx-auto">
      <div className="md:w-[50%] ">
        <div className="flex flex-col mx-auto w-[90%] md:w-[70%] my-14">
          <Link
            to={showSecondForm ? "/signup-guardian" : "/signup-mentor"}
            className="text-right text-primary mb-5"
          >
            {showSecondForm ? "Skip for now" : "Sign Up as a Mentor Instead?"}
          </Link>
          <div>
            <h1 className="text-3xl my-2 font-thin text-primay">
              Sign Up as Guardian
            </h1>
            <p className="text-primary text-sm">
              {showSecondForm
                ? "Add a ward to your account"
                : "Create a guardian account."}
            </p>

            <form
              className="text-sm text-gray-800"
              onSubmit={
                showSecondForm ? handleSecondFormSubmit : handleFirstFormSubmit
              }
            >
              {!showSecondForm ? (
                <>
                  {/* Name */}
                  <div className="flex gap-3 my-3">
                    <div className="w-[50%]">
                      {" "}
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="border border-gray-300 py-2 px-1 rounded-md outline-none w-full"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="border border-gray-300 py-2 px-1 rounded-md outline-none w-full"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs">
                          {errors.lastName}
                        </p>
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
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
                  )}
                  {/* Email */}
                  <div className="flex items-center gap-1 border border-gray-300 py-2 px-1 rounded-md my-3">
                    <img src={mail} alt="" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full outline-none"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                  {/* address */}
                  <div className="flex items-center gap-1 border border-gray-300 py-2 px-1 rounded-md my-3">
                    <img src={location} alt="" />
                    <input
                      type="address"
                      name="address"
                      placeholder="Residential Address"
                      className="w-full outline-none"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.address && (
                    <p className="text-red-500 text-xs">{errors.address}</p>
                  )}

                  {/* Password */}
                  <div className="flex justify-between items-center border border-gray-300 py-2 px-1 rounded-md my-3">
                    <div className="flex items-center gap-1">
                      <img src={password} alt="" />
                      <input
                        className="outline-none"
                        name="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                  {/* Button */}
                  <button
                    type="submit"
                    className="flex justify-center mx-auto bg-primary text-white py-2 text-sm rounded my-5 w-full"
                  >
                    Create Account
                  </button>
                </>
              ) : (
                <>
                  {/* Second Form Fields with Dropdowns */}
                  <main className="grid grid-cols-2 gap-4 my-10">
                    {wards.length >= MAX_WARDS && (
                      <p className="text-red-500 text-sm col-span-2 flex items-center justify-center p-2 gap-1 border border-primary bg-tertiary rounded-sm">
                        Maximum amount of wards reached.
                      </p>
                    )}

                    {wards.length > 0 ? (
                      wards.map((ward, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 border border-gray-300 rounded-md px-2 py-3 my-3 bg-gray-200"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white">
                            {getInitials(ward.wardFirstName, ward.wardLastName)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm">{`${ward.wardFirstName} ${ward.wardLastName}`}</h3>

                            <p className="text-xs py-1">{ward.department}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div
                        onClick={handleOpenModal}
                        className="flex items-center gap-2  px-2 py-3 border border-gray-300 rounded text-gray-500 text-sm cursor-pointer"
                      >
                        <FaPlus />
                        <span>Add a Ward</span>
                      </div>
                    )}

                    {/* Add another ward button only if under the limit */}
                    {wards.length < MAX_WARDS && (
                      <div
                        onClick={handleOpenModal}
                        className="flex items-center gap-2  px-2 py-2 border border-gray-300 rounded text-gray-500 text-sm cursor-pointer "
                      >
                        <FaPlus />
                        <span>Add a Ward</span>
                      </div>
                    )}
                  </main>
                  <button
                    onClick={createAccount}
                    disabled={wards.length === 0}
                    className={`w-full ${
                      wards.length === 0 ? "bg-gray-400" : "bg-primary"
                    } text-white flex items-center justify-center py-2 rounded`}
                  >
                    Continue
                  </button>

                  {/* Modal */}
                  <GuardianModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                  >
                    <h2 className="text-2xl font-thin my-5">
                      Add your ward&apos;s information
                    </h2>
                    <form>
                      {/* Name */}
                      <div className="flex gap-3 my-3">
                        <div className="w-[50%]">
                          {" "}
                          <input
                            type="text"
                            name="wardFirstName"
                            placeholder="Wards First Name"
                            className="border border-gray-300 py-2 px-1 rounded-md outline-none w-full"
                            value={secondFormData.wardFirstName}
                            onChange={handleChange}
                          />
                          {errors.wardFirstName && (
                            <p className="text-red-500 text-xs">
                              {errors.wardFirstName}
                            </p>
                          )}
                        </div>
                        <div className="w-[50%]">
                          <input
                            type="text"
                            name="wardLastName"
                            placeholder="Wards Last Name"
                            className="border border-gray-300 py-2 px-1 rounded-md outline-none w-full"
                            value={secondFormData.wardLastName}
                            onChange={handleChange}
                          />
                          {errors.wardLastName && (
                            <p className="text-red-500 text-xs">
                              {errors.wardLastName}
                            </p>
                          )}
                        </div>
                      </div>
                      {/* Number */}
                      <div className="flex w-full items-center gap-2 border border-gray-300 py-2 px-1 rounded-md my-3">
                        <img src={flag} alt="" />
                        <input
                          type="text"
                          name="wardPhoneNumber"
                          placeholder="Enter Phone Number (Whatsapp)"
                          className="w-full outline-none"
                          value={secondFormData.wardPhoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.wardPhoneNumber && (
                        <p className="text-red-500 text-xs">
                          {errors.wardPhoneNumber}
                        </p>
                      )}
                      {/* Email */}
                      <div className="flex items-center gap-1 border border-gray-300 py-2 px-1 rounded-md my-3">
                        <img src={mail} alt="" />
                        <input
                          type="email"
                          name="wardEmail"
                          placeholder="Email Address (optional)"
                          className="w-full outline-none"
                          value={formData.wardEmail}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.wardEmail && (
                        <p className="text-red-500 text-xs">
                          {errors.wardEmail}
                        </p>
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
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex justify-between items-center border border-gray-300 py-2 px-1 rounded-md w-[50%] hover:border-gray-500">
                          <label>Female</label>
                          <input
                            type="radio"
                            name="gender"
                            className="outline-none"
                            value="female"
                            onChange={handleChange}
                          />
                        </div>{" "}
                      </div>
                      {errors.gender && (
                        <p className="text-red-500 text-xs">{errors.gender}</p>
                      )}
                      {/* Faculty */}
                      <select
                        name="faculty"
                        className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full text-gray-500 bg-white mb-3"
                        value={secondFormData.faculty}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Faculty
                        </option>
                        <option value="Management">Management</option>
                        <option value="Science">Science</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Health">Health</option>
                      </select>
                      {errors.faculty && (
                        <p className="text-red-500 text-xs">{errors.faculty}</p>
                      )}
                      {/* Department */}
                      <select
                        name="department"
                        className="border border-gray-300 py-3 px-2 mb-3 rounded-md outline-none w-full text-gray-500 bg-white"
                        value={secondFormData.department}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Department
                        </option>
                        <option value="Medicine">Medicine</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer Science">
                          Computer Science
                        </option>
                      </select>
                      {errors.department && (
                        <p className="text-red-500 text-xs">
                          {errors.department}
                        </p>
                      )}

                      {/* Religion */}
                      <select
                        name="religion"
                        className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full text-gray-500 bg-white mb-3"
                        value={secondFormData.religion}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select your religion
                        </option>
                        <option value="Christian">Christian</option>
                        <option value="Muslim">Muslim</option>
                      </select>
                      {errors.religion && (
                        <p className="text-red-500 text-xs">
                          {errors.religion}
                        </p>
                      )}
                      <button
                        type="submit"
                        onClick={handleSecondFormSubmit}
                        className="flex justify-center mx-auto bg-primary text-white py-2 text-sm rounded my-5 w-full "
                      >
                        Add Wards Details
                      </button>
                      <button
                        type="submit"
                        onClick={handleCancel}
                        className="flex justify-center mx-auto bg-white text-gray-700 py-2 text-sm rounded my-5 w-full border border-gray-300 "
                      >
                        Cancel
                      </button>
                    </form>
                  </GuardianModal>
                  {/* Submit Button for Second Form */}
                </>
              )}
            </form>
            {/* lottie */}
            {showAnimation && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-72 h-72">
                <Lottie
                  animationData={accountCreated}
                  loop={false}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            )}
            <div className="text-center w-[90%] text-primary flex mx-auto text-sm my-4">
              <p>
                By clicking on the &quot;Create Account&quot; button, you
                indicate that you agree to the{" "}
                <Link className="underline">Terms of Service</Link> and{" "}
                <Link className="underline">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FormCard headingText={"Mentor your ward into greatness"} />
    </main>
  );
};

export default GuardianSignup;
