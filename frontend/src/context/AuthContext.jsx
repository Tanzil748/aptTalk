import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );
  const [loggedIn, setLoggedIn] = useState(false); //check if there is a logged user

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser)); // loggedUser is an object, but values need to be string in local storage
  }, [loggedUser]);

  const login = async (input) => {
    // get loggedUser info from backend and set it with 'setLoggedUser'
    const res = await axios.post("http://localhost:4500/auth/login", input);
    setLoggedUser(res.data);
    setLoggedIn(true);
    console.log(res.data); // TEMPORARY: just looking at what data appears when user logs in
  };

  const logOut = () => {
    localStorage.setItem("loggedUser", null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedUser, loggedIn, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
