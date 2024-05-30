import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  signInFaliure,
  signInStart,
  signInSucess,
} from "../../slices/userSlice";
import { toast } from "react-toastify";
import Loader from "../utils/Loader";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFaliure(data.message));
        toast.error("SomeThing Went Wrong");
        return;
      }
      dispatch(signInSucess(data));
      toast.success("Login SuccessFully !");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full ">
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-14 md:mt-28 bg-white dark:bg-black">
      {/* <div className="bg-white p-8 rounded shadow-md w-full mx-10"> */}
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your passowrd "
            className="mt-1 p-2 w-full border border-gray-300 rounded-md pr-10"
            onChange={handleChange}
          />
          <div
            className="absolute inset-y-0 right-0 top-4 flex items-center pr-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white hover:bg-green-600 w-full py-2 px-4 rounded-md"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500 transition-all ease-in-out duration-150 font-semibold hover:text-green-600">
            Register here
          </Link>
        </p>
      </div>
      {error && (
        <div className="mt-4 text-red-600">
          <p>{error}</p>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default LoginPage;
