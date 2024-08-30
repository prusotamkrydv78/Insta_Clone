import React, { useContext, useEffect } from "react";
import "./Explore.css";
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";

import { BsFillHeartFill } from "react-icons/bs";

import { FaComment } from "react-icons/fa";

const Explore = () => {
  const { navToggle, setNavToggle } = useContext(NavToggleContext);
  useEffect(() => {
    setNavToggle(false);
  }, []);
  return (
    <div className="content px-[15px] py-[25px] h-lvh">
      <RowData />
      <RowData />
      <RowData />
      <RowData />
      <RowData />
    </div>
  );
};

export default Explore;
const RowData = () => {
  return (
    <div>
      <div>
        <HoverEffect />
      </div>
      <div>
        <HoverEffect />
      </div>
      <div>
        <HoverEffect />
      </div>
      <div>
        <HoverEffect />
      </div>
      <div>
        <HoverEffect />
      </div>
    </div>
  );
};
const HoverEffect = () => {
  return (
    <div className="details flex items-center justify-center gap-8">
      <div className="text-white flex items-center justify-center gap-1">
        <BsFillHeartFill />
        154k
      </div>
      <div className="text-white flex items-center justify-center gap-1">
        <FaComment /> 45
      </div>
    </div>
  );
};
