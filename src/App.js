import React from "react";
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

ReactGA.initialize("G-4Q5436GYH1");

function App() {
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
