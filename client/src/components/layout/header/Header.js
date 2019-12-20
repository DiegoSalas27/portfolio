import React from "react";
import { navItem } from "../../resources";
import NavItem from "./NavItem";

function Header({}, ref) {
  function changeActive(e) {
    const navItems = ref[2].current.querySelectorAll(".nav-item");

    navItems.forEach(item => {
      item.classList.remove("current");
    });

    e.currentTarget.classList.add("current");
  }

  return (
    <div className="header">
      <div className="contenedor">
        <h1 className="logo">Portfolio</h1>
        <div className="btn-menu" ref={ref[0]}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className="menu" ref={ref[1]}>
          <ul className="menu-nav" ref={ref[2]}>
            {navItem.map((item, i) => {
              return (
                <NavItem
                  key={i}
                  changeActive={changeActive}
                  to={item.to}
                  current={item.current}
                  name={item.name}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const forwardedHeader = React.forwardRef(Header);

export default forwardedHeader;
