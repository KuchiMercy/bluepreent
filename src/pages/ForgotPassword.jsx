import { Link } from "react-router-dom";
import mail from "../assets/icons/Message.png";
import { useState } from "react";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    let newError = {};
    if (!email) {
      newError = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Email is invalid.";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  // Handle Change
  const handleChange = (e) => {
    const { value } = e.target;

    // Clear error
    setError({});

    // Update email input
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Forgot password:", email);
      setEmail("");
    }
  };

  return (
    <div className="flex items-center mx-auto w-[100%] md:w-[40%] justify-center h-screen">
      <main className="flex flex-col items-center bg-white p-6 rounded md:shadow-md md:border md:border-gray-300">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <p className="mb-6 text-center text-sm text-gray-500 w-[90%]">
          Enter the email address associated with your account and we&apos;ll
          send a link to reset your password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4 border border-gray-200 rounded px-3 py-1">
            <div className="flex flex-col ">
              <label className="mb-1 text-xs text-gray-500" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="py-1 outline-none"
                placeholder="Enter your email"
              />
              {error.email && (
                <p className="text-red-500 text-xs">{error.email}</p>
              )}
            </div>
            <img src={mail} alt="Email Icon" className="ml-2" />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded w-full"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-gray-500">
          Remember Password?{" "}
          <Link
            to="/login-mentor"
            className="underline text-primary font-medium"
          >
            Login
          </Link>
        </p>
      </main>
    </div>
  );
};

export default ForgotPassword;
