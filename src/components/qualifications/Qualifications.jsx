import React, { useState } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My presonal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt  qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Diploma in Computer and Programming and Analysis
                </h3>
                <span className="qualification__subtitle">
                  Seneca College 🇨🇦
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Bachelor of Business Administration
                </h3>
                <span className="qualification__subtitle">
                  Universidade Mackenzie 🇧🇷
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016 - 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer CO-OP</h3>
                <span className="qualification__subtitle">
                  Ontario Government - Ministry of Public and Service Delivery -
                  Digital Solution and Innovation Unit
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Controlling analyst</h3>
                <span className="qualification__subtitle">
                  Atvos Agroindustrial
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>TBC
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Controlling analyst</h3>
                <span className="qualification__subtitle">
                  Nissan Motor Co.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>TBC
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Jr. Controlling analyst
                </h3>
                <span className="qualification__subtitle">
                  Nissan Motor Co.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>TBC
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Marketing Intern</h3>
                <span className="qualification__subtitle">
                  Nissan Motor Co.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>TBC
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Sales Planning Intern</h3>
                <span className="qualification__subtitle">
                  Nissan Motor Co.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>TBC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
