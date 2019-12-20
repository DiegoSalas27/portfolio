import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/layout/header/Header";
import Banner from "../components/pages/banner/Banner";
import Footer from "../components/layout/Footer";
import About from "../components/pages/about/About";
import Jobs from "../components/pages/jobs/Jobs";
import Projects from "../components/pages/projects/Projects";
import Loader from "../components/layout/Loader";

function App() {
  const btnMenu = useRef(null);
  const nav = useRef(null);
  const navItem = useRef(null);
  const main = useRef(null);
  const loader = useRef(null);
  const loaderImage = useRef(null);

  useEffect(() => {
    btnMenu.current.addEventListener("click", () => {
      nav.current.classList.toggle("show");
      main.current.classList.toggle("move");
    });
    const navItems = navItem.current.querySelectorAll(".nav-item");
    if (window.screen.width < 700) {
      navItems.forEach(item => {
        item.addEventListener("click", () => {
          nav.current.classList.toggle("show");
          main.current.classList.toggle("move");
        });
      });
    }
  });

  return (
    <Router>
      <Loader ref={[loader, loaderImage]} />
      <Header ref={[btnMenu, nav, navItem]} />
      <div className="main" ref={main}>
        <Route
          exact
          path="/"
          render={props => (
            <Banner {...props} loader={loader} loaderImage={loaderImage} />
          )}
        />
        <Route exact path="/AboutMe" component={About} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route exact path="/Projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
