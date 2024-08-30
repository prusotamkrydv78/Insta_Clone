import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavToggleContext from "./Context/NavToggleContext/NavToggleContext";

// padding: 45px 20px;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
const Layout = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSearchToggled,setisSearchToggled] = useState(false);

  return (
    <div className="flex">
      <NavToggleContext.Provider value={{ navToggle, setNavToggle,isSearchToggled,setisSearchToggled }}>
        <div className={`${navToggle?" w-[5rem]":" w-[15rem]"} h-lvh  border-r-[1px] border-[#878787] py-[35px] px-[15px] flex flex-col justify-between`}>
          <Header />
        </div>
        <div className={`${navToggle?"toggledContent":'notToggledContent'}   overflow-x-hidden`}>
          <Outlet />
        </div>
      </NavToggleContext.Provider>
    </div>
  );
};

export default Layout;
