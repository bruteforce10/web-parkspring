"use client";

import { createContext, useContext, useState } from "react";

const appContext = createContext();

const ContextProvider = ({ children }) => {
  return (
    <appContext.Provider value={{ state: "dark" }}>
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export { appContext, ContextProvider, useAppContext };
