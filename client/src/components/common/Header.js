import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function changeActive(e) {
    let navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
      item.classList.remove("current");
    });

    let navActive = document.getElementById(e.target.id);
    if (navActive !== null) navActive.parentElement.classList.add("current");
  }

  return (
    <div className="header">
      <div className="contenedor">
        <h1 className="logo">Portfolio</h1>
        <div className="btn-menu">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className="menu">
          <ul className="menu-nav">
            <li className="nav-item current" onClick={changeActive}>
              <Link className="nav-link" id="1" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={changeActive}>
              <Link className="nav-link" id="2" to="/AboutMe">
                About me
              </Link>
            </li>
            <li className="nav-item" onClick={changeActive}>
              <Link className="nav-link" id="3" to="/Jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item" onClick={changeActive}>
              <Link className="nav-link" id="4" to="/Projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
