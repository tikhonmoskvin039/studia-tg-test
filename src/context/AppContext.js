import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedKeys, setSelectedKeys] = useState("/");

  return (
    <AppContext.Provider value={{ selectedKeys, setSelectedKeys }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
