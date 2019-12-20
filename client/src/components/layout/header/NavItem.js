import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className={`nav-item ${props.current}`} onClick={props.changeActive}>
      <Link className="nav-link" to={props.to}>
        {props.name}
      </Link>
    </li>
  );
}

export default NavItem;
