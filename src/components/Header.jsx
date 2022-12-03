import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="logo-section">
          <Link to="/*">
            <p className="logo">Catlist.</p>
          </Link>
        </div>
        <div className="favorite-section">
        </div>
      </div>
    );
  }
}

export default Header;
