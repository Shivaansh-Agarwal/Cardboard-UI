import React, { createContext, useState, useEffect, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setToastList([]);
    }, 8000);
  }, [toastList, setToastList]);

  return (
    <ToastContext.Provider value={{ toastList, setToastList }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastList = () => {
  return useContext(ToastContext);
};
