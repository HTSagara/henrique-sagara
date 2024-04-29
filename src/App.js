import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualifications from "./components/qualifications/Qualifications";
import Contact from "./components/contact/Contact";
import Footer from "./footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-4Q5436GYH1");

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
