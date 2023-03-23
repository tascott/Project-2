import "../../scss/style.css";
import projects from "../../data/projects.json";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import CommentBox from "../../components/CommentBox";
import InvoiceGenerator from "../../components/InvoiceGenerator";

function ProjectPage() {
  const { urlFriendlyName } = useParams();
  const [isVerified, setIsVerified] = useState(false);
  const [showError, setShowError] = useState(false);

  var selectedProject = projects.find(function (project) {
    return project.urlFriendlyName === urlFriendlyName;
  });

  const checkPw = (e) => {
    e.preventDefault();
    // gets the current input value
    const answer = document.getElementById("password").value;

    //insecure but hardcoded password for now
    if (answer === "password") {
      setIsVerified(true);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Show error message for 3 seconds
    }
  };

  const YourApp = () => {
    return (
      <div className="project">
        <h2>{selectedProject.client_name}</h2>
        <h3>Client Location: {selectedProject.client_location}</h3>
        <p>Client Website: {selectedProject.website_name}</p>
        <p>Project start: {selectedProject.project_start_date}</p>
        <p>Current Project Length: {selectedProject.current_project_length}</p>
        <p>Estimated Cost: {selectedProject.estimated_costs}</p>
        <CommentBox />
        <Link to={`/projects`}>
          <button>Back to Project List</button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      {isVerified ? (
        <YourApp />
      ) : (
        <form className="pw-form" onSubmit={checkPw}>
            <h3>Please enter the password</h3>
            <input id="username" hidden type="text" autoComplete="username" style={{display: "none"}}/>
          <input id="password" name="password" type="password" autoComplete="new-password"/>
          <br />
            <button type="submit">Enter</button>
            {showError && (
            <p className="error-message error">Sorry, that's not it. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}

export default ProjectPage;
