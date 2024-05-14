import React, { createContext, useState, useContext } from "react";

const ContextFun = createContext("");
export const Context = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <ContextFun.Provider value={{ showNav, setShowNav }}>
      {children}
    </ContextFun.Provider>
  );
};

export function Hammer() {
  return useContext(ContextFun);
}
