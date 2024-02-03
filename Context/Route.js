import React, { useState, createContext, useContext } from "react";

const RouteContext = createContext();

export const Route = ({ children }) => {
  const [route, setRoute] = useState("home");

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export function useRoute() {
  return useContext(RouteContext);
}
