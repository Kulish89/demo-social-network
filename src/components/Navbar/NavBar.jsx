import React from "react";
import { NavLink } from "react-router-dom";
import UsersContainer from "../Friends/UsersContainer";
import classes from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={classes.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={classes.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={classes.active}>
          Settings
        </NavLink>
      </div>
      <div className={classes.friends}>
        <NavLink to="/users" activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
