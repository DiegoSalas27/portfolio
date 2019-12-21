import React, { useRef, createRef } from "react";
import { navItem } from "../../resources";
import NavItem from "./NavItem";

function Header({ main }, ref) {
  const refs = useRef(
    Array.from({ length: navItem.length }, a => createRef(null))
  );

  function changeActive(e) {
    refs.current.forEach(item => {
      item.current.classList.remove("current");
    });

    if (window.screen.width < 700) {
      ref[1].current.classList.toggle("show");
      main.current.classList.toggle("move");
    }

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
          <ul className="menu-nav">
            {navItem.map((item, i) => {
              return (
                <NavItem
                  key={i}
                  ref={refs.current[i]}
                  to={item.to}
                  current={item.current}
                  name={item.name}
                  changeActive={changeActive}
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
