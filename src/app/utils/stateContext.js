"use client";

import { createContext, useContext, useState, useEffect } from "react";

const appContext = createContext();

const ContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [active, setActive] = useState(0);
  const [filterDate, setFilterDate] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch("https://web-parkspring.vercel.app/api/data-web");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    getData();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <appContext.Provider
      value={{
        isScrolled,
        setIsScrolled,
        isOpen,
        setIsOpen,
        data,
        setData,
        active,
        setActive,
        filterDate,
        setFilterDate,
      }}
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
