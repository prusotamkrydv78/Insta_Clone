 
import React, { useContext, useEffect } from "react";
import NavToggleContext from "../../Context/NavToggleContext/NavToggleContext";
const Create = () => {
  const { navToggle, setNavToggle } = useContext(NavToggleContext);
  useEffect(() => {
    setNavToggle(false);
  }, []);
  return (
    <div>
      <h1>Create pages</h1>
    </div>
  )
}

export default Create
