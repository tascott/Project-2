import "./style.css";
import projects from "../../data/projects.json";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function ProjectPage() {
  const { id } = useParams();

  var selectedProject = projects.find(function (project) {
    return project.id === Number(id);
  });

  const [isVerified, setIsVerified] = useState(false);

  const checkPw = () => {
    // gets the current input value
    const answer = document.getElementById("password").value;

    if (answer === "yourSecretPassword") {
      setIsVerified(true);
    } else {
      alert("Sorry, that's not it");
    }
  };

  const YourApp = () => (
    <div className="project">
      <h1>Project ID: {selectedProject.id}</h1>
      <h2>Client: {selectedProject.client_name}</h2>
      <h3>Client Location: {selectedProject.client_location}</h3>
      <p>Client Website: {selectedProject.website_url}</p>
      <p>Project start: {selectedProject.project_start_date}</p>
      <p>Current Project Length: {selectedProject.current_project_length}</p>
      <p>Estimated Cost: {selectedProject.estimated_costs}</p>
      <Link to={`/projects`}>Back to Project List</Link>

    </div>
  );

  return (
    <div>
      {isVerified ? (
        <YourApp />
      ) : (
        <form onSubmit={checkPw}>
          <input id="password" name="password" />
          <button>open sesame</button>
        </form>
      )}
    </div>
  );
}

export default ProjectPage;
