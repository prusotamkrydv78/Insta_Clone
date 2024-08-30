import React, { useContext, useEffect } from "react";
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";

const Messages = () => {
  const { navToggle, setNavToggle, setisSearchToggled } =
    useContext(NavToggleContext);
  useEffect(() => {
    setNavToggle(true);
 
  }, []);
  return (
    <div>
      <h1>Messages page</h1>
    </div>
  );
};

export default Messages;
