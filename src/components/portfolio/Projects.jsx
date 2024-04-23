import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Projects = () =>
{
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setPorjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() =>
  {
    if (item.name === 'all')
    {
      setPorjects(projectsData);
    } else
    {
      const newProjects = projectsData.filter((project) =>
      {
        return project.category === item.name;
      });
      setPorjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) =>
  {
    setItem({ name: e.target.textContent });
    setActive(index)
  };
  return (
    <div>
      <div className="work__filters" id="portfolio">
        {projectsNav.map((item, index) =>
        {
          return (
            <span onClick={(e) => { handleClick(e, index) }} className={`${active === index ? 'active-work' : ''} work__item`} key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) =>
        {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
