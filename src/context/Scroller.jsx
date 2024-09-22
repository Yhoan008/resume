import { createContext, useContext, useEffect, useState } from "react";

export const ScrollerContext = createContext();

export default function ScrollerProvider({ children }) {
  const [scroller, setScroller] = useState(window.scrollY);

  useEffect(() => {
    const scrollevent = window.addEventListener("scroll", () => {
      setScroller(window.scrollY);
    });

    return window.removeEventListener("scroll", scrollevent);
  }, []);

  return (
    <ScrollerContext.Provider value={scroller}>
      {children}
    </ScrollerContext.Provider>
  );
}
