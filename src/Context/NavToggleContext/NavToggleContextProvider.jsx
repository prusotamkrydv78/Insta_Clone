import { useState } from "react";
import NavToggleContext from "./NavToggleContext";

const NavToggleContextProvider = ({ children }) => {

  return (
    <NavToggleContext>
      {children}
    </NavToggleContext>
  );
};

export default NavToggleContextProvider;