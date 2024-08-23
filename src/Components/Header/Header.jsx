import React from "react";
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
const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-[2rem]">
        <div>
          <NavLink to="/">
            <img src={instaLogo} alt="" />
          </NavLink>
        </div>
        <div className="navigator flex flex-col gap-[.5rem]">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <GoHomeFill />
              </span>
              <h4>Home</h4>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <CiSearch />
              </span>
              <h4>Search</h4>
            </NavLink>
          </div>
          <div>
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
          <div>
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
          <div>
            <NavLink
              to="messages"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <span>
                <RiMessengerLine />
              </span>
              <h4>Messages</h4>
            </NavLink>
          </div>
          <div>
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
          <div>
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
          <div>
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
      <div className="navigator flex flex-col gap-[.5rem]">
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
        <div>
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
    </>
  );
};

export default Header;
