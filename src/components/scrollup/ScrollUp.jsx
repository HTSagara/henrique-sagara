import React, { useEffect } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollUp) {
        window.scrollY >= 560
          ? scrollUp.classList.add("show-scroll")
          : scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scrollup"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;
