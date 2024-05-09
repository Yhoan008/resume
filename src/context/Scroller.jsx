import { createContext, useContext, useEffect, useState } from "react";

export const ScrollerContext = createContext();

export default function ScrollerProvider({ children }) {
  const [scroller, setScroller] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroller(window.scrollY);
    });
  }, []);

  return (
    <ScrollerContext.Provider value={scroller}>
      {children}
    </ScrollerContext.Provider>
  );
}
