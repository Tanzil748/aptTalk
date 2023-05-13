import React from "react";
import css from "../styles/UserDropdown.module.css";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  return (
    <div className={css.layout}>
      <ul className={css.menu}>
        <Link to="/register" className={css.link}>
          Register
        </Link>
        <Link to="/login" className={css.link}>
          Log In
        </Link>
      </ul>
    </div>
  );
};

export default UserDropdown;
