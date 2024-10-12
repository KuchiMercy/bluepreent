import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import accountCreated from "../../ui/account-created.json";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import flag from "../../assets/icons/NG.png";
import mail from "../../assets/icons/Message.png";
import password from "../../assets/icons/Shield.png";
import FormCard from "../FormCard";
import { useState } from "react";

const MentorSignup = () => {
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    phoneNumber: "",
  };

  const secondFormState = {
    schoolName: "",
    faculty: "",
    department: "",
    religion: "",
    religiousGroup: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [secondFormData, setSecondFormData] = useState(secondFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [errors, setErrors] = useState({});
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
    if (!formData.gender) newErrors.gender = "Gender is required.";
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

    // School Name validation
    if (!secondFormData.schoolName)
      newErrors.schoolName = "School name is required.";
    // Faculty validation
    if (!secondFormData.faculty) newErrors.faculty = "Faculty is required.";
    // Department validation
    if (!secondFormData.department)
      newErrors.department = "Department is required.";
    // Religion validation
    if (!secondFormData.religion) newErrors.religion = "Religion is required.";
    // Religious Group validation
    if (!secondFormData.religiousGroup)
      newErrors.religiousGroup = "Religious group is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSecondFormSubmit = (e) => {
    e.preventDefault();
    // validate second form
    if (!validateSecondForm()) return;
    // both form submission
    const combinedFormData = {
      ...formData,
      ...secondFormData,
    };
    console.log("Form submitted successfully:", combinedFormData);

    // Reset all data and state if needed
    setFormData(initialState);
    setSecondFormData(secondFormState);

    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      navigate("/mentor-dashboard");
    }, 3000);
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
    if (name === "phoneNumber") {
      const NumberValue = value.replace(/[^0-9+]/g, ""); // Allow only numbers and '+'
      setFormData((prevData) => ({
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
  return (
    <main className="flex h-[100vh] w-[95%] mx-auto">
      <div className="md:w-[50%] ">
        <div className="flex flex-col mx-auto w-[90%] md:w-[70%] my-14">
          <Link
            to={"/signup-guardian"}
            className="text-right text-primary mb-5"
          >
            Sign Up as a Guardian Instead?
          </Link>
          <div>
            <h1 className="text-3xl my-2 font-thin text-primay">
              Sign Up as Mentor
            </h1>
            <p className="text-primary text-sm">
              Create your mentor account on Blueeprint
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
                    Continue
                  </button>
                </>
              ) : (
                <>
                  {/* Second Form Fields with Dropdowns */}
                  <div>
                    <select
                      name="schoolName"
                      className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full text-gray-600 bg-white mt-4"
                      value={secondFormData.schoolName}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        School Name
                      </option>
                      <option value="University of Lagos">
                        University of Lagos
                      </option>
                      <option value="University of Portharcourt">
                        University of Portharcourt
                      </option>
                      <option value="James Dowson University">
                        James Dowson University
                      </option>
                      <option value="University of Benin">
                        University of Benin
                      </option>
                      <option value="University of Ilorin">
                        University of Ilorin
                      </option>
                      <option value="University of Jos">
                        University of Jos
                      </option>
                      <option value="Babcock University">
                        Babcock University
                      </option>
                    </select>
                    {errors.schoolName && (
                      <p className="text-red-500 text-xs">
                        {errors.schoolName}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3 my-4">
                    <div className="w-[50%]">
                      <select
                        name="faculty"
                        className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full text-gray-600 bg-white"
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
                    </div>
                    <div className="w-[50%]">
                      <select
                        name="department"
                        className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full text-gray-600 bg-white"
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
                    </div>
                  </div>
                  <div>
                    <select
                      name="religion"
                      className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full mb-4 text-gray-600 bg-white"
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
                      <p className="text-red-500 text-xs">{errors.religion}</p>
                    )}
                  </div>
                  <div>
                    <select
                      name="religiousGroup"
                      className="border border-gray-300 py-3 px-2 rounded-md outline-none w-full mb-3 text-gray-600 bg-white"
                      value={secondFormData.religiousGroup}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        What fellowship do you attend
                      </option>
                      <option value="Catholic Group">Catholic Group</option>
                      <option value="Orthodox">Orthodox</option>
                      <option value="None">None</option>
                    </select>
                    {errors.religiousGroup && (
                      <p className="text-red-500 text-xs">
                        {errors.religiousGroup}
                      </p>
                    )}
                  </div>
                  {/* Submit Button for Second Form */}
                  <button
                    type="submit"
                    className="flex justify-center mx-auto bg-primary text-white py-2 text-sm rounded my-5 w-full "
                  >
                    Create Account
                  </button>
                </>
              )}
            </form>

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

      <FormCard headingText={"Mentor students, grow minds."} />
    </main>
  );
};

export default MentorSignup;
