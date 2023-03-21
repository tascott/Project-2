import "./style.css";
import projects from "../../data/projects.json";
import { useState } from "react";
import InvoiceGenerator from "../../components/InvoiceGenerator";

function ProjectPage() {
  const [state, setState] = useState('');
  const [currentProject, setCurrentProject] = useState('');
  const [data, setData] = useState({});
  const [generatorOpen, setGeneratorOpen] = useState(false);

  const updateCurrentProject = (e) => {
    setCurrentProject(e.target.value);
    const selectedProject = projects.find((project) => {
      return project.client_name === e.target.value;
    })
    setData(selectedProject);
  }

  const isDisabled = () => {
    return currentProject === '' ? true : false;
  }

  const handleRenderGen = (e) => {
    setState(e.target.value);
    setData({
      ...data,
      invoiceDate: new Date().toJSON().slice(0, 10),
    });
    setGeneratorOpen(true);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
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
        <button onClick={handleRenderGen} disabled={isDisabled()} value="invoice">Start Building Invoice</button>
      </div>
      {generatorOpen && currentProject != '' &&
        <form>
        <label htmlFor="invoiceDate">Invoice Date:</label>
        <input
          id="invoiceDate"
          name="invoiceDate"
          type="text"
          value={new Date().toJSON().slice(0, 10)}
          onChange={handleUpdate}
          />
        <br />
        <label htmlFor="paymentDueDate">Payment due by:</label>
        <input
          id="paymentDueDate"
          name="paymentDueDate"
          type="date"
          value={data.paymentDueDate || ''}
          onChange={handleUpdate}
          />

        <br />
        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          name="notes"
          type="text"
          value={data.notes || ''}
          onChange={handleUpdate}
        />
      </form>
      }
      {state === 'invoice' && currentProject != '' && <InvoiceGenerator data={data} />}
    </div>
  );
}

export default ProjectPage;
