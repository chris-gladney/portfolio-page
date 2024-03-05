import { useEffect, useState } from "react";
import portfolio from "./data/portfolio.json";
import Nav from "./Nav";

function Portfolio() {
  const [projects, setProjects] = useState<object>({});

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  return (
    <>
      <Nav />
      <h1 className="name">Chris Gladney</h1>
      {Object.keys(projects).map((project) => {
        return (
          <div className="project" key={project}>
            <h2>{project}</h2>
            <ul className="projects-list">
              <li>
                Type:
                {
                  //@ts-ignore
                  projects[project].type
                }
              </li>
              <br />
              {
                //@ts-ignore
                projects[project].hosted
                  ? //@ts-ignore
                    `Hosted: ${projects[project].hosted}`
                  : ""
              }
              <br />
              <li>
                Github:
                {
                  //@ts-ignore
                  projects[project].github
                }
              </li>
              <br />
              <li></li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Portfolio;
