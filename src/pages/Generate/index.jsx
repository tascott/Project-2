import "./style.css";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import InvoiceGenerator from "../../components/InvoiceGenerator";

// get the state (invoice, team member, project), initially set to '', then when clicked, change the state and render the correspnding component

// Disable button unless a project is selected


function ProjectPage() {
  const [state, setState] = useState('');

  const handleClick = (e) => {
    setState(e.target.value);
    console.log(state);
  }

  return (
    <div className="generatorContainer">
      <div className="invoice-generator generator-card">
        <select>
          {projects.map((project) => {
            return (
              <option key={project.id} value={project.id}>{project.client_name}</option>
            )
          })}
        </select>
        <button onClick={handleClick} value="invoice">Invoice Generator</button>
      </div>
      <div className="addProject generator-card">
        <h3>Add Project (Coming Soon)</h3>
      </div>
      <div className="addTeamMember generator-card">
        <h3>Add Team Member (Coming Soon)</h3>
      </div>
      {state === 'invoice' && <InvoiceGenerator />}

    </div>
  );
}

export default ProjectPage;
