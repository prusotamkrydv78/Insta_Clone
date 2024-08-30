import React, { useContext, useEffect } from "react";
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";

const Reels = () => {
  const { navToggle, setNavToggle } = useContext(NavToggleContext);
  useEffect(() => {
    setNavToggle(false);
  }, []);
  return (
    <div>
      <h1>Reels page</h1>
    </div>
  )
}

export default Reels
