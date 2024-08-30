import React, { useContext, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import instaLogo from "../../assets/Logo/instaLogo.svg";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaThreads } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";
import Search from "../Search/Search.jsx";
const Header = () => {
  const { navToggle, setNavToggle, isSearchToggled, setisSearchToggled } =
    useContext(NavToggleContext);

  console.log(navToggle);
  return (
    <>
      <div
        className={`flex flex-col gap-[2rem] z-[100] ${
          navToggle ? "navToggled" : ""
        }`}
      >
        <div
          className={`${navToggle ? "navToggledIcon" : ""}`}
          onClick={() => setisSearchToggled(false)}
        >
          <NavLink to="/">
            {navToggle ? (
              <FaInstagram size="24px" />
            ) : (
              <img src={instaLogo} alt="" />
            )}
          </NavLink>
        </div>
        <div className="navigator flex flex-col gap-[.5rem]">
          <div
            className={`${navToggle ? "navToggledIcon" : ""}`}
            onClick={() => setisSearchToggled(false)}
          >
            <NavLink
              to="/"
              onClick={() => setNavToggle(false)}
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <GoHomeFill />
              </span>
              <h4>Home</h4>
            </NavLink>
          </div>
          <div
            onClick={() => {
              setisSearchToggled(!isSearchToggled);
              setNavToggle(true);
            }}
            className={`${navToggle ? "navToggledIcon" : ""}`}
          >
            <a>
              <span>
                <CiSearch />
              </span>
              <h4>Search</h4>
            </a>
          </div>

          <div
            className={`${navToggle ? "navToggledIcon" : ""}`}
            onClick={() => setisSearchToggled(false)}
          >
            <NavLink
              to="explore"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <MdOutlineExplore fill="true" />
              </span>
              <h4>Explore</h4>
            </NavLink>
          </div>
          <div
            className={`${navToggle ? "navToggledIcon" : ""}`}
            onClick={() => setisSearchToggled(false)}
          >
            <NavLink
              to="reels"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <MdOndemandVideo />
              </span>
              <h4>Reels</h4>
            </NavLink>
          </div>
          <div
            className={`${navToggle ? "navToggledIcon" : ""}`}
            onClick={() => setisSearchToggled(false)}
          >
            <NavLink
              to="messages"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              onClick={() => setisSearchToggled(false)}
            >
              <span>
                <RiMessengerLine />
              </span>
              <h4>Messages</h4>
            </NavLink>
          </div>
          <div
            className={`${navToggle ? "navToggledIcon" : ""}`}
            onClick={() => setisSearchToggled(false)}
          >
            <NavLink
              to="notifications"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <FaRegHeart />
              </span>
              <h4>Notifications</h4>
            </NavLink>
          </div>
          <div
            className={`${navToggle ? "navToggledIcon" : ""}`}
            onClick={() => setisSearchToggled(false)}
          >
            <NavLink
              to="create"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <MdOutlineAddBox />
              </span>
              <h4>Create</h4>
            </NavLink>
          </div>
          <div
            className={`${navToggle ? "navToggledIcon" : ""}`}
            onClick={() => setisSearchToggled(false)}
          >
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <RxAvatar />
              </span>
              <h4>Profile</h4>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={`searchTab ${isSearchToggled ? "" : "!hidden"} z-[100] `}>
        <Search />
      </div>
      <div
        className={`navigator flex flex-col gap-[.5rem]  ${
          navToggle ? "navToggled" : ""
        }`}
        onClick={() => {
          setisSearchToggled(false);
       
        }}
      >
        {/* <div>
          <NavLink
            to="threads"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <span>
              <FaThreads />
            </span>
            <h4>Threds</h4>
          </NavLink>
        </div> */}
        <div className={`${navToggle ? "navToggledIcon" : ""}`}>
          <NavLink
            to="more"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <span>
              <MdMenu />
            </span>
            <h4>More</h4>
          </NavLink>
        </div>
      </div>
      <div
        className={`w-[100vw] h-[100vh] absolute top-0 left-0 z-[99] ${
          isSearchToggled ? "" : "hidden"
        }`}
        onClick={() => {
          setNavToggle(false);
          setisSearchToggled(false);
        }}
      ></div>
    </>
  );
};

export default Header;
