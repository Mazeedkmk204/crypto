

import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp, checkIfEmailExists } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Check if email already exists
      const emailExists = await checkIfEmailExists(email);
      if (emailExists) {
        setError("Email already exists. Please use a different email.");
        return;
      }

      // Sign up if email doesn't exist
      await signUp(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
      // Display alert if signup is not successful
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Reset error when email changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Reset error when password changes
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold ">Sign Up</h1>
        {/* {error && <p className="p-3 bg-red-300 my-2">{error}</p>} */}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={handleEmailChange}
                value={email}
                className={`w-full p-2 bg-primary border border-input rounded-2xl ${
                  error.includes("email") ? "border-red-500" : ""
                }`}
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
            {error.includes("email") && (
              <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={handlePasswordChange}
                value={password}
                className={`w-full p-2 bg-primary border border-input rounded-2xl ${
                  error.includes("password") ? "border-red-500" : ""
                }`}
                type={showPassword ? "text" : "password"}
              />
              <AiFillLock
                className="absolute right-2 top-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {error.includes("password") && (
              <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Sign up
          </button>
        </form>
        <p className="my-4">
          Already have an account ?{" "}
          <Link className="text-accent" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
