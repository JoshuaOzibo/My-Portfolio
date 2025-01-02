import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [darkMood, setDarkMood] = useState(false);
  // switch darkMood button;
  const handleDarkmoodButton = () => {
    setDarkMood((prev) => !prev);
  };

  const contextValue = {
    darkMood,
    handleDarkmoodButton,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
