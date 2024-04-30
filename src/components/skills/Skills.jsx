// Skills.jsx
import React, { useState, useEffect } from "react";
import "./Skills.css";
import Category from "./Category";
import { skillsList } from "./SkillsList";

const Skills = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Group skills by category
    const groupedSkills = skillsList.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
    setCategories(Object.entries(groupedSkills));
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {categories.map(([category, skills]) => (
          <Category key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
