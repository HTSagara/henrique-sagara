// Category.jsx
import React from "react";
import SkillsItems from "./SkillsItems";

const Category = ({ category, skills }) =>
{
    return (
        <div className="skills__content">
            <h3 className="skills__title">{category}</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {skills.map((item) => (
                        <SkillsItems key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
