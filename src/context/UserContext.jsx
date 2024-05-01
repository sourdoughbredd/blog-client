// UserContext.js
import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  jwt: "",
  jwtRefresh: "",
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState("");
  const [jwtRefresh, setJwtRefresh] = useState("");

  // Example login/logout functions
  const login = (userData, jwtToken, jwtRefreshToken) => {
    setUser(userData);
    setJwt(jwtToken);
    setJwtRefresh(jwtRefreshToken);
  };

  const logout = () => {
    setUser(null);
    setJwt("");
    setJwtRefresh("");
  };

  return (
    <UserContext.Provider value={{ user, jwt, jwtRefresh, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
