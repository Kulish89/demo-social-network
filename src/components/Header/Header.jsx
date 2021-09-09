import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import socialNetworkLogo from "./../../assets/images/social-network-logo.png";
function Header(props) {
  return (
    <header className={classes.header}>
      <img src={socialNetworkLogo}></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            <div>{props.login}</div>
            <div>
              <button onClick={props.logout}>Log out</button>
            </div>
          </div>
        ) : (
          <NavLink to={"/login"}></NavLink>
        )}
      </div>
    </header>
  );
}
export default Header;
