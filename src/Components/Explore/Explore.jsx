import React, { useContext, useEffect } from "react";
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";

const Explore = () => {
  const { navToggle, setNavToggle } = useContext(NavToggleContext);
  useEffect(() => {
    setNavToggle(false);
  }, []);
  return (
    <div>
      <h1>Explore pages</h1>
    </div>
  )
}

export default Explore
