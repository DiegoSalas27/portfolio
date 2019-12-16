import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/common/Footer";
import About from "../components/About";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Route exact path="/" component={Banner} />
        <Route exact path="/AboutMe" component={About} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route exact path="/Projects" component={Projects} />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
