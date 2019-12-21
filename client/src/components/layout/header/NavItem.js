import React from "react";
import { Link } from "react-router-dom";

function NavItem({ current, to, name, changeActive }, ref) {
  return (
    <li
      ref={ref}
      name={name}
      className={`nav-item ${current}`}
      onClick={changeActive}
    >
      <Link className="nav-link" to={to}>
        {name}
      </Link>
    </li>
  );
}

const forwardRef = React.forwardRef(NavItem);

export default forwardRef;
