import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutStart, logoutSucess, logoutFaliure } from "../slices/userSlice";
import {
  FaSearch,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaColumns,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDiv, setShowDiv] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logoutStart());
    setShowDiv(!showDiv)
    try {
      const res = await fetch("/api/v1/logout");
      const data = res.json();
      if (data.success === false) {
        dispatch(logoutFaliure(data.message));
        return;
      }
      dispatch(logoutSucess(""));
      navigate("/");
    } catch (error) {
      dispatch(loginFaliure(error.message));
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const showDivBar = () => {
    setShowDiv(!showDiv)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <>
      <div className="bg-gray-800 p-4 shadow-lg flex items-center pr-7 justify-between z-50">
        <div className="flex justify-between items-center gap-4">
          <Link to={"/home"} className="text-lg font-bold text-white">
            HamroRoom
          </Link>
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white p-2 rounded-md mt-2 md:mt-0 w-ful"
          >
            {currentUser ? (
              <>
                {" "}
                <input
                  type="text"
                  placeholder="Search Room here"
                  className="bg-transparent focus:outline-none border-none w-[230px] md:w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="ml-2">
                  <FaSearch />
                </button>
              </>
            ) : (
              <>
                <h1>Welcome to room rental ,Please Login to continue</h1>
              </>
            )}
          </form>
        </div>
        <div className="md:flex hidden items-center justify-center gap-4 mt-4 md:mt-0">
          {currentUser ? (
            <>
              <Link to={"/profile"} className="flex items-center text-white">
                <img
                  src={currentUser.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2">Profile</span>
              </Link>
              {currentUser.role === "admin" && (
                <Link
                  to={"/admindashboard"}
                  className="flex items-center text-white"
                >
                  <FaColumns className="w-6 h-6" />
                  <span className="ml-2">Dashboard</span>
                </Link>
              )}
              {currentUser.role === "owner" && (
                <Link
                  to={"/ownerdashboard"}
                  className="flex items-center text-white "
                >
                  <FaColumns className="w-6 h-6" />
                  <span className="ml-2">Dashboard</span>
                </Link>
              )}
              <button
                className="flex items-center text-white"
                onClick={handleLogout}
              >
                <FaUser />
                <span className="ml-2 ">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/"}
                className="flex items-center text-white mt-2 md:mt-0"
              >
                <FaSignInAlt className="w-6 h-6" />
                <span className="ml-2">Login</span>
              </Link>
              <Link
                to={"/register"}
                className="flex items-center text-white mt-2 md:mt-0"
              >
                <FaUserPlus className="w-6 h-6" />
                <span className="ml-2">Register</span>
              </Link>
            </>
          )}
        </div>

        <div className="flex relative md:hidden items-center justify-center gap-4 mt-4 md:mt-0">
          {currentUser ? (
            <>
              <div onClick={showDivBar} className="flex items-center text-white">
                <img
                  src={currentUser.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                {/* <span className="ml-2">Profile</span> */}
              </div>
              {/* {currentUser.role === "admin" && (
                <Link
                  to={"/admindashboard"}
                  className="flex items-center text-white"
                >
                  <FaColumns className="w-6 h-6" />
                  <span className="ml-2">Dashboard</span>
                </Link>
              )}
              {currentUser.role === "owner" && (
                <Link
                  to={"/ownerdashboard"}
                  className="flex items-center text-white "
                >
                  <FaColumns className="w-6 h-6" />
                  <span className="ml-2">Dashboard</span>
                </Link>
              )} */}
              {/* <button
                className="flex items-center text-white"
                onClick={handleLogout}
              >
                <FaUser />
                <span className="ml-2 ">Logout</span>
              </button> */}
            </>
          ) : (
            <>
              <Link
                to={"/"}
                className="flex items-center text-white mt-2 md:mt-0"
              >
                <FaSignInAlt className="w-6 h-6" />
                <span className="ml-2">Login</span>
              </Link>
              <Link
                to={"/register"}
                className="flex items-center text-white mt-2 md:mt-0"
              >
                <FaUserPlus className="w-6 h-6" />
                <span className="ml-2">Register</span>
              </Link>
            </>
          )}
          {
            showDiv && <div className="absolute flex flex-col shadow drop-shadow-lg -right-7 top-12 bg-gray-600">
              <div className="flex items-center justify-center px-7 text-gray-200 space-x-1 hover:font-semibold py-1 border-b border-gray-500">
                <FaUser size={15} className="" />
                <Link to={"/profile"} onClick={showDivBar} className=" items-center">Profile</Link>
              </div>

              {currentUser.role === "admin" && (
                <Link
                  to={"/admindashboard"}
                  className="flex items-center justify-center space-x-1 py-1 border-b border-gray-500 text-gray-200"
                >
                  <FaColumns className="" size={15} />
                  <span className="ml-2">Dashboard</span>
                </Link>
              )}
              {currentUser.role === "owner" && (
                <Link
                  to={"/ownerdashboard"}
                  className="flex items-center justify-center space-x-1 py-1 border-b border-gray-500 text-gray-200 "
                >
                  <FaColumns size={15} />
                  <span className="">Dashboard</span>
                </Link>
              )}

              <button
                className="flex items-center px-5 space-x-1 py-1 text-gray-200"
                onClick={handleLogout}
              >
                <FiLogOut />
                <span className=" ">Logout</span>
              </button>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
