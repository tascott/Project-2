import "./style.css";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import InvoiceGenerator from "../../components/InvoiceGenerator";

// get the state (invoice, team member, project), initially set to '', then when clicked, change the state and render the correspnding component

// Need To Disable button unless a project is selected

//select the project to pass in to the generator
// var selectedProject = projects.find(function (project) {
//   console.log(project)
//   // return project.urlFriendlyName === urlFriendlyName;
// });

function ProjectPage() {
  const [state, setState] = useState('');
  const [currentProject, setCurrentProject] = useState('');
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const updateCurrentProject = (e) => {
    setCurrentProject(e.target.value);
    const selectedProject = projects.find((project) => {
      return project.client_name === e.target.value;
    })
    setData(selectedProject);
  }

  const handleClick = (e) => {
    setState(e.target.value);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...data,
      newProperty: inputValue,
    };
    setData(updatedData);
    setInputValue("");
  }

  return (
    <div className="generatorContainer">
      <div className="invoice-generator generator-card">
        <select value={currentProject} onChange={updateCurrentProject}>
        <option key="0" value=''>Select Project</option>
          {projects.map((project) => {
            return (
              <option key={project.id} value={project.client_name}>{project.client_name}</option>
            )
          })}
        </select>
        <button onClick={handleClick} value="invoice">Generate Invoice</button>
      </div>
      <p>----------</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="invoiceDate">Invoice Date:</label>
        <input
          id="invoiceDate"
          type="text"
          value={new Date().toJSON().slice(0, 10)}
          onChange={handleChange}
        />
        <label htmlFor="PaymentDueDate">Payment due by:</label>
        <input
          id="PaymentDueDate"
          type="date"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>----------</p>
      {JSON.stringify(data)}
      {state === 'invoice' && <InvoiceGenerator data={data} />}

    </div>
  );
}

export default ProjectPage;
