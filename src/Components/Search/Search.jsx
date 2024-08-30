import React, { useContext, useEffect } from "react";
import './Search.css'
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";

const Search = () => {
  const { navToggle, setNavToggle } = useContext(NavToggleContext);
  useEffect(() => {
    setNavToggle(true);
  }, []);
  return (
    <>
      <div className="border-b-2 border-[#dbdbdb] px-[15px] py-[20px] flex gap-6 flex-col">
        <div>
          <h1 className="text-[25px] font-bold">Search</h1>
        </div>
        <div>
          <input type="text" placeholder="Search" className="w-full outline-none border-none bg-[#efefef] p-[10px] rounded-md" />
        </div>
      </div>
      <div className=" px-[15px] py-[20px] pb-0">
        <div>
          <span className="font-bold">Recent</span>
        </div>
        <div className="result">
          <span>No recent searches</span>
        </div>
      </div>
       
    </>
  );
};

export default Search;
