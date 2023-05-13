import React from "react";
import css from "../styles/register.module.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className={css.backdrop}>
      <form action="POST" className={css.form_container}>
        <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>REGISTER</h2>
        <hr />
        <label htmlFor="username" className={css.labelStyle}>
          Username:{" "}
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter a username..."
          className={css.inputStyle}
        />
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
        >
          Create Account
        </button>
        <div style={{ fontSize: "14px", textAlign: "center" }}>
          <span style={{ marginRight: "5px" }}>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
