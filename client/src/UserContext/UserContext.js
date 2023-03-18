import React, { createContext } from "react";
import { useJwt } from "react-jwt";
const UserContext = createContext();

const User = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { decodedToken } = useJwt(token);

  return (
    <UserContext.Provider value={[{ decodedToken }]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, User };
