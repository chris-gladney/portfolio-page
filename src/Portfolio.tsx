import { useEffect, useState } from "react";
import portfolio from "./data/portfolio.json";
import Nav from "./Nav";
import Project from "./Project";

function Portfolio() {
  const [projects, setProjects] = useState<object>({});

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  return (
    <>
      <div className="main-content">
        <Nav />
        <h1 className="name">Chris Gladney</h1>
        <div className="projects">
          {Object.keys(projects).map((project) => {
            return (
              <Project
                key={project}
                project={project}
                projectObject={projects[project]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
