import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser)); // loggedUser is an object, but values need to be string in local storage
  }, [loggedUser]);

  const login = () => {
    // get loggedUser info from backend and set it with 'setLoggedUser'
    setLoggedUser({
      id: 1,
      username: "tanzil333",
    });
  };

  return (
    <AuthContext.Provider value={{ loggedUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
