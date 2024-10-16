import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginSuccessful from "../../ui/login-successful.json";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import FormCard from "../FormCard";
import mail from "../../assets/icons/Message.png";
import password from "../../assets/icons/Shield.png";
import { useState } from "react";

const GuardianLogin = () => {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // First form Validation
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error for the specific field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const mockAuthToken = "auth-token";
      localStorage.setItem("authToken", mockAuthToken);
      //
      setShowAnimation(true);
      console.log("Login Successful:", formData);
      setTimeout(() => {
        navigate("/guardian-dashboard");
        setShowAnimation(false);
      }, 3000);
    }
    setFormData(initialState);
  };
  return (
    <main className="flex h-[100vh] w-[95%] mx-auto">
      <div className="w-[90%] md:w-[50%]">
        <div className="flex flex-col mx-auto w-[90%] md:w-[70%] my-32">
          <Link to={"/login-mentor"} className="text-right text-primary mb-5">
            Login as a Mentor Instead?
          </Link>
          <div>
            <h1 className="text-3xl my-2 font-thin text-primay">
              Login as Guardian
            </h1>
            <p className="text-primary text-sm">
              Login to your guardian account on Blueeprint
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleFormSubmit}
            className="text-sm my-5 text-gray-800"
          >
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
              <button type="button" onClick={handleTogglePasswordVisibility}>
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
            {/* Button */}
            <button
              type="submit"
              className="flex justify-center mx-auto bg-primary text-white py-2 text-sm rounded my-5 w-full "
            >
              Login
            </button>
          </form>

          {/* lottie */}
          {showAnimation && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-72 h-72">
              <Lottie
                animationData={loginSuccessful}
                loop={false}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
          <div className="text-primary flex justify-between mx-auto text-sm">
            <p>
              Don&apos;t have an account?
              <Link to={"/signup-guardian"} className="underline">
                {" "}
                Create one
              </Link>{" "}
              <br />
              <Link to={"/forgot-password"} className="underline">
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      </div>
      <FormCard headingText={"Mentor your ward into greatness"} />
    </main>
  );
};

export default GuardianLogin;
