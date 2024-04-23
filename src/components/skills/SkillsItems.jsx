// SkillsItems.jsx
import React from "react";

const SkillsItems = ({ item }) =>
{
    return (
        <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
                <h3 className="skills__name">{item.name}</h3>
                <span className="skills__level">{item.level}</span>
            </div>
        </div>
    );
};

export default SkillsItems;
