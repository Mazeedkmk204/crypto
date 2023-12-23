// import React, { useState } from "react";
// import { AiFillLock, AiOutlineMail } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";

// const Signin = () => {
//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//    const [error, setError] = useState('')
//    const navigate = useNavigate()
//   const { signIn } = UserAuth();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signIn(email, password);
//       navigate("/account");
//     } catch (error) {
//       setError(error.message);
//       console.log(error.message);
//     }
//   };
//   return (
//     <div>
//       <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
//         <h1 className="text-2xl font-bold ">Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="my-4">
//             <label>Email</label>
//             <div className="my-2 w-full relative rounded-2xl shadow-xl">
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 bg-primary border border-input rounded-2xl"
//                 type="email"
//               />
//               <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
//             </div>
//           </div>
//           <div className="my-4">
//             <label>Password</label>
//             <div className="my-2 w-full relative rounded-2xl shadow-xl">
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-2 bg-primary border border-input rounded-2xl"
//                 type="password"
//               />
//               <AiFillLock className="absolute right-2 top-3 text-gray-400" />
//             </div>
//           </div>
//           <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
//             Sign in
//           </button>
//         </form>
//         <p className="my-4">
//           Don't have an account ?{" "}
//           <Link className="text-accent" to="/signup">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;
import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/account");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      
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
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={handleEmailChange}
                value={email}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={handlePasswordChange}
                value={password}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type={showPassword ? "text" : "password"}
              />
              <AiFillLock
                className="absolute right-2 top-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Sign in
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="my-4">
          Don't have an account?{" "}
          <Link className="text-accent" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;