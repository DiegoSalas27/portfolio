import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/layout/header/Header";
import Banner from "../components/pages/banner/Banner";
import Footer from "../components/layout/Footer";
import About from "../components/pages/about/About";
import Jobs from "../components/pages/jobs/Jobs";
import Projects from "../components/pages/projects/Projects";
import Loader from "../components/layout/Loader";

function App() {
  const { t, i18n } = useTranslation();

  const translate = lang => {
    i18n.changeLanguage(lang);
  };

  const btnMenu = useRef(null);
  const nav = useRef(null);
  const main = useRef(null);
  const loader = useRef(null);
  const loaderImage = useRef(null);

  useEffect(() => {
    btnMenu.current.addEventListener("click", () => {
      nav.current.classList.toggle("show");
      main.current.classList.toggle("move");
    });
  });

  return (
    <Router>
      <Loader ref={[loader, loaderImage]} t={t} />
      <Header main={main} t={t} translate={translate} ref={[btnMenu, nav]} />
      <div className="main" ref={main}>
        <Route
          exact
          path="/"
          render={props => (
            <Banner
              {...props}
              loader={loader}
              loaderImage={loaderImage}
              t={t}
            />
          )}
        />
        <Route
          exact
          path="/AboutMe"
          render={props => <About {...props} t={t} />}
        />
        <Route exact path="/Jobs" render={props => <Jobs {...props} t={t} />} />
        <Route
          exact
          path="/Projects"
          render={props => <Projects {...props} t={t} />}
        />
        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App;
