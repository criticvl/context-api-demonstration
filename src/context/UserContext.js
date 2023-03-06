import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [someState, setSomeState] = useState(true);

  const toggleState = () => {
    setSomeState(!someState);
  };

  const value = { someState, toggleState };
  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
