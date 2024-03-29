import { useState, useEffect } from "react";

interface Project {
  project: string;
  projectObject: any;
}

function Project(props: Project) {
  const [technologies, setTechnologies] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setTechnologies(props.projectObject.tech);
  }, []);

  if (!showDetails) {
    return (
      <div className="project">
        <h2>{props.project}</h2>
        <p>{props.projectObject.type}</p>
        <button
          className="details"
          onClick={() => {
            setShowDetails(true);
          }}
        >
          Details &gt;
        </button>
      </div>
    );
  } else {
    return (
      <div className="project-info">
        <h2>{props.project}</h2>
        <p>{props.projectObject.type}</p>
        <p>
          {props.projectObject.description}
          <br />
          Github: {props.projectObject.github}
          <br />
          {props.projectObject.hosted ? `Hosted: ${props.projectObject.hosted}` : ""}
        </p>
        {technologies.map((tech) => {
          return (
            <img
              src={`/assets/${tech}.png`}
              key={tech}
              className="tech-stack"
            />
          );
        })}
        <br />
        <button
          className="details"
          onClick={() => {
            setShowDetails(false);
          }}
        >
          Show Less
        </button>
      </div>
    );
  }
}

export default Project;
