import React, { useRef, createRef } from "react";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";

function Header({ main, t, translate }, ref) {
  var currentItem = localStorage.link;
  const location = useLocation();
  const navItems = t("Heading.NavItem", { returnObjects: true });
  const refs = useRef(
    Array.from({ length: navItems.length }, a => createRef(null))
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
    localStorage.setItem("link", e.currentTarget.getAttribute("name"));
  }

  return (
    <div className="header">
      <div className="contenedor">
        <h1 className="logo">{t("Heading.logo")}</h1>
        <div className="btn-menu" ref={ref[0]}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className="menu" ref={ref[1]}>
          <ul className="menu-nav">
            <div className="translate-container">
              <div className="translate" onClick={() => translate("en", refs)}>
                {t("Heading.enTranslation")} &nbsp;
              </div>
              <div className="translate" onClick={() => translate("es", refs)}>
                {t("Heading.esTranslation")}
              </div>
            </div>
            {navItems.map((item, i) => {
              currentItem !== undefined &&
                item.current === "current" &&
                (item.current = "");

              currentItem == item.name && (item.current = "current");

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
