import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work__content">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__description">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
