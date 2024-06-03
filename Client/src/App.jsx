import React from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/pages/Home.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import OwnerDashboard from "./components/dashboard/OwnerDashboard.jsx";
import ProfilePage from "./components/pages/ProfilePage.jsx";
import PrivateRoute from "./components/private/PrivateRoute.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
import RoomRegister from "./components/pages/RoomRegister.jsx";
import UpdateRoom from "./components/pages/UpdateRoom.jsx";
import RoomDetails from "./components/pages/RoomDetails.jsx";
import Search from "./components/pages/Search.jsx";
import About from "./components/pages/About.jsx";
import RoomParther from "./components/pages/RoomParther.jsx";
import Chat from "./components/pages/Chat.jsx";
import Recommanded from "./components/pages/Recommanded.jsx";
import Notification from "./components/pages/Notification.jsx";
import Modal from "./components/Modal.jsx";
// import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  // const { currentUser } = useSelector((state) => state.user);
  const hideNavbar =
    location.pathname === "/findRoomPartner" ||
    location.pathname === "/findRoomPartner/chat" ||
    location.pathname === "/findRoomPartner/notification" ||
    location.pathname === "/findRoomPartner/recommanded" ||
    location.pathname === "/admindashboard" ||
    location.pathname === "/ownerdashboard" ||
    location.pathname.startsWith("/updateroom");
  return (
    <>
      {!hideNavbar && <Navbar />}
      <ToastContainer />
      <Routes>
        {/* <Route
          path="/"
          element={currentUser && currentUser._id ? <Home /> : <LoginPage />}
        /> */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
        <Route path="/modal" element={<Modal />}/>
          <Route path="/findRoomPartner" element={<RoomParther />}>
            <Route path="chat" element={<Chat />}/>
            <Route path="recommanded" element={<Recommanded />}/>
            <Route path="notification" element={<Notification />}/>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/ownerdashboard" element={<OwnerDashboard />} />
          <Route path="/registerroom" element={<RoomRegister />} />
          <Route path="/updateroom/:roomId" element={<UpdateRoom />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
