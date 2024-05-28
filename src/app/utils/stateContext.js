"use client";

import { createContext, useContext, useState, useEffect } from "react";

const appContext = createContext();

const ContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <appContext.Provider
      value={{ isScrolled, setIsScrolled, isOpen, setIsOpen }}
    >
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
