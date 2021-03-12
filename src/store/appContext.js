import { createContext, useState } from "react";

export const AppContext = createContext(0);

export default function ({ children }) {
  const [auth, setAuth] = useState(false);

  const login = (href) => {
    window.history.pushState({}, "", href);
    setAuth(true);
  };

  const logout = (href) => {
    window.history.pushState({}, "", href);
    setAuth(false);
  };

  return (
    <AppContext.Provider value={{ auth, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}
