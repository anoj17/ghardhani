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
import PartnerModal from "./Modal";
import { userData } from "../slices/roomPartnerSlice";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDiv, setShowDiv] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {singleUser} = useSelector((state) => state.room);

  // console.log(currentUser)

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

  const openModel = () =>{
    if(singleUser){
      navigate('/findRoomPartner')
    }
    setIsModalOpen(true)
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
          <Link to={"/"} className="text-lg font-bold text-white">
          <img src="../src/assets/GharDhaniLogo.png" alt="GharDhani Logo" className="h-20 w-20" />
          </Link>
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white p-2 rounded-md mt-2 md:mt-0 w-ful"
          >
            {currentUser ? (
              <>
                <input
                  type="text"
                  placeholder="Search Room here"
                  className={`w-[230px] bg-transparent focus:outline-none border-none md:w-[300px]`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="ml-2">
                  <FaSearch />
                </button>
              </>
            ) : (
              <>
                <h1 className="md:flex hidden">Please Login to continue</h1>
              </>
            )}
          </form>
        </div>
        <div className="md:flex hidden items-center justify-center gap-4 mt-4 md:mt-0">
          {currentUser ? (
            <>
              {currentUser.role === "user" && (
                <div onClick={openModel} className="px-5 cursor-pointer hover:bg-gray-300 bg-white text-black mr-5 py-2 rounded-md">
                  Find Parther
                </div>
              )}

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
              <div className="flex justify-center space-x-4 items-center">
                <Link
                  to={"/login"}
                  className="flex items-center text-white md:mt-0"
                >
                  <FaSignInAlt className="w-6 h-6" />
                  <span className="ml-2">Login</span>
                </Link>
                <Link
                  to={"/register"}
                  className="flex items-center text-white md:mt-0"
                >
                  <FaUserPlus className="w-6 h-6" />
                  <span className="ml-2">Register</span>
                </Link>
              </div>
            </>
          )}
          <PartnerModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
        </div>

        <div className="flex relative md:hidden items-center justify-center md:mt-0">
          {currentUser ? (
            <>
              <div onClick={showDivBar} className="flex items-center justify-center text-white">
                <img
                  src={currentUser.avatar}
                  alt=""
                  className="w-9 h-9 rounded-full"
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
              <div className="flex justify-center space-x-3 items-center">
                <Link
                  to={"/"}
                  className="flex items-center text-white md:mt-0"
                >
                  <FaSignInAlt className="w-6 h-6" />
                  <span className="ml-2">Login</span>
                </Link>
                <Link
                  to={"/register"}
                  className="flex items-center text-white md:mt-0"
                >
                  <FaUserPlus className="w-6 h-6" />
                  <span className="ml-2">Register</span>
                </Link>
              </div>
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
