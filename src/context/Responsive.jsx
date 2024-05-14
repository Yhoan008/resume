import React, { createContext, useEffect, useState } from "react";

export const ResponsiveContext = createContext();

export default function ResponsiveProvider({ children }) {
  const [responsive, setResponsive] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResponsive(window.innerWidth);
    });
  }, []);

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  );
}
