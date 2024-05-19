import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from "../utils/Loader";
import { toast } from "react-toastify";


const RegisterPage = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  let number = "🇳🇵+977";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 w-50px ">
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-28 bg-white dark:bg-black">
      {/* <div className="bg-white p-8 rounded shadow-md w-full "> */}
        <h1 className="text-2xl font-bold mb-4">Register Here</h1>
        
        <form onSubmit={submitHandler} className="flex flex-col w-full">
          <div className="flex items-center justify-between gap-5">

            <div className="w-1/2">
              <label htmlFor="username" className="mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                onChange={handleChange}
                required
                placeholder="Enter your username"
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />     
            </div>


            <div className="w-1/2">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="p-2 border border-gray-300 rounded-md pr-10 w-full"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="phoneNumber" className="mb-2">
                Phone Number
              </label>
              <div className="flex items-center mb-4">
                <span className="mr-2 text-sm">{number}</span>
                <input
                  type="tel"
                  id="phoneNumber"
                  required
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md flex-1 w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="w-1/2">
              <label htmlFor="address" className="mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                required
                onChange={handleChange}
                placeholder="Enter Your Address"
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="priceRange" className="mb-2">
                Price Range
              </label>
              <input
                type="number"
                id="priceRange"
                required
                onChange={handleChange}
                placeholder="Enter your price Range"
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <div className="w-full mb-5">
            <label htmlFor="address" className="mb-2">
              Register As
            </label>
            <select
              id="role"
              onChange={handleChange}
              className="p-3 w-full bg-white border border-gray-300 "
            >
              <option value="">Select Role</option>
              <option value="owner">Vendor</option>
              <option value="user">User</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        <div className="mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500">
              Login here
            </Link>
          </p>
        </div>
      {/* </div> */}
    </div>
  );
};
export default RegisterPage;


// import React from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";

// function SignupFormDemo() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };

//   return (
//     <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//         Welcome to GharDhani
//       </h2>
//       <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//         Glad to see you here !
//       </p>

//       <form className="my-8" onSubmit={handleSubmit}>
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//           <LabelInputContainer>
//             <Label htmlFor="firstname">First name</Label>
//             <Input id="firstname" placeholder="Tyler" type="text" />
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="lastname">Last name</Label>
//             <Input id="lastname" placeholder="Durden" type="text" />
//           </LabelInputContainer>
//         </div>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="email">Email Address</Label>
//           <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" placeholder="••••••••" type="password" />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-8">
//           <Label htmlFor="twitterpassword">Your twitter password</Label>
//           <Input
//             id="twitterpassword"
//             placeholder="••••••••"
//             type="twitterpassword"
//           />
//         </LabelInputContainer>

//         <button
//           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//           type="submit"
//         >
//           Sign up &rarr;
//           <BottomGradient />
//         </button>

//         <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

//         <div className="flex flex-col space-y-4">
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               GitHub
//             </span>
//             <BottomGradient />
//           </button>
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               Google
//             </span>
//             <BottomGradient />
//           </button>
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               OnlyFans
//             </span>
//             <BottomGradient />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer = ({ children, className }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };

// export default SignupFormDemo;
