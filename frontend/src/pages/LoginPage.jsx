import React, { useContext } from "react";
import css from "../styles/login.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const loginHandler = () => {
    login();
  };

  return (
    <div className={css.backdrop}>
      <form action="POST" className={css.form_container}>
        <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>LOGIN</h2>
        <hr />
        <label htmlFor="email" className={css.labelStyle}>
          Email:{" "}
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email..."
          className={css.inputStyle}
        />

        <label htmlFor="password" className={css.labelStyle}>
          Password:{" "}
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter password..."
          className={css.inputStyle}
        />

        <button
          style={{ marginTop: "10px", padding: "8px" }}
          className={css.btn}
          onClick={loginHandler}
        >
          Log In
        </button>
        <div style={{ fontSize: "14px", textAlign: "center" }}>
          <span style={{ marginRight: "5px" }}>Don't have an account?</span>
          <Link to="/register">Register Now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
