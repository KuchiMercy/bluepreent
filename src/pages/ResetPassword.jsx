import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    let newError = "";
    if (!password) {
      newError.password = "Password is required.";
    } else if (password.length < 6) {
      newError.password = "Password must be at least 6 characters long.";
    }
    setError(newError);
    return !newError;
  };
  // Handle Change
  const handleChange = (e) => {
    const { value } = e.target;

    // Clear error
    setPassword("");

    // Update email input
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Reset password:", password);
      setPassword("");
    }
  };

  return (
    <div className="flex items-center mx-auto w-[100%] md:w-[40%] justify-center h-screen">
      <main className="flex flex-col items-center bg-white p-6 rounded md:shadow-md md:border md:border-gray-300">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <p className="mb-6 text-center text-sm text-gray-500 w-[90%]">
          Kindly enter a new password for your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4 border border-gray-200 rounded px-3 py-1">
            <div className="flex flex-col ">
              <label className="mb-1 text-xs text-gray-500" htmlFor="email">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="py-1 outline-none"
                placeholder="Enter your new password"
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>
            <button type="button" onClick={handleTogglePasswordVisibility}>
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded w-full"
          >
            Set Password
          </button>
        </form>
        <p className="mt-4 text-gray-500">
          Remember Password?{" "}
          <Link to="/login-mentor" className="underline text-primary font-medium">
            Login
          </Link>
        </p>
      </main>
    </div>
  );
};

export default ResetPassword;
