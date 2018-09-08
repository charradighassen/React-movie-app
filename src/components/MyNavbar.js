import React from "react";
import "./css/mynavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-links">
          <NavLink className="NavLink" to="/">
            List Movies
          </NavLink>
        </div>
      </div>
    );
  }
}
export default MyNavbar;
