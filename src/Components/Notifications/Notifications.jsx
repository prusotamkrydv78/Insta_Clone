 
import React, { useContext, useEffect } from "react";
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";
const Notifications = () => {
  const { navToggle, setNavToggle } = useContext(NavToggleContext);
  useEffect(() => {
    setNavToggle(true);
  }, []);
  return (
    <div>
      <h1>Notifications page</h1>
    </div>
  )
}

export default Notifications
