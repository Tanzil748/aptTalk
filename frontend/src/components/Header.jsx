import React, { useState } from "react";
import css from "../styles/header.module.css";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdMapsHomeWork } from "react-icons/md";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const [userDrop, setUserDrop] = useState(false);
  return (
    <div className={css.layout}>
      <div>
        <Link to="/" className={css.left}>
          <MdMapsHomeWork size={30} />
          <span>AptTalk</span>
        </Link>
      </div>
      <div className={css.right}>
        <Link
          to="/profile/:id"
          style={{ color: "black", textDecoration: "none" }}
        >
          My Profile
        </Link>
        <div
          className={css.userProfile}
          onClick={() => setUserDrop((prev) => !prev)}
        >
          <BiUserCircle size={30} />
          {userDrop && <UserDropdown />}
          <span>Name</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
