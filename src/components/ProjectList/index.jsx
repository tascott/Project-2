import "../../scss/style.css";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import InvoiceGenerator from "../InvoiceGenerator";
import ProjectToDos from "../ProjectToDos";

function ProjectList() {
  const [isShown, setIsShown] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const animationProps = useSpring({
    opacity: isShown ? 1 : 0,
    transform: isShown ? "translateY(0)" : "translateY(-20px)",
    config: { duration: 200 },
  });

  const toggleComponent = (id) => {
    setIsShown(!isShown);
    setSelectedId(id);
  };

  return (
    <div className="projectListContainer">
      <h1>Ongoing Projects</h1>
      <div className="projectList">
        {projects.map((project) => (
          <div className="projectCardContainer" key={project.id}>
            <ProjectCard key={project.id} {...project} />

            <button onClick={() => toggleComponent(project.id)}>
              {isShown && selectedId === project.id ? 'Close' : 'View More'}
            </button>

            {isShown && selectedId === project.id && (
              <animated.div style={animationProps}>
                <div className="projectToDo">
                  <ProjectToDos data={project} />
                </div>
              </animated.div>
            )}

            <Link to={`/projects/${project.urlFriendlyName}`}>
              <button>View Project Page</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
