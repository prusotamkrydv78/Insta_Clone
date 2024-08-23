import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <div className="w-[15rem] h-lvh fixed border-r-[1px] border-[#878787]">
        <Header />
      </div>
      <div className="ml-[15rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
