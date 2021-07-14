import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <img src="https://img2.pngio.com/ka-png-2-png-image-ka-png-500_501.png"></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
}
export default Header;
