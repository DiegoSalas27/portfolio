import React from "react";

function Footer() {
  return (
    <footer id="main-footer">
      <ul className="footer-nav">
        <li className="footer-item">
          <a className="footer-link">
            Phone: <span className="text-sec">959363398</span>
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="https://github.com/DiegoSalas27">
            Github
          </a>
        </li>
        <li className="footer-item">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/diego-salas-noain-b11837146/"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
