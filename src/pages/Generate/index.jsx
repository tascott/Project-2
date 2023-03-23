import "../../scss/style.css";
import projects from "../../data/projects.json";
import { useState } from "react";
import InvoiceGenerator from "../../components/InvoiceGenerator";

function ProjectPage() {
  const [preview, setPreview] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [data, setData] = useState({});

  const togglePreview = () => {
    setPreview(!preview);
  };

  const updateCurrentProject = (e) => {
    setCurrentProject(e.target.value);
    const selectedProject = projects.find((project) => {
      return project.client_name === e.target.value;
    });
    setData(selectedProject);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // nice way of updating the state object without having to do a bunch of if statements
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="generatorContainer">
      {/* Lots of checks below to make sure we have a current project otherwise the form will look weird */}
      <div className="invoice-generator generator-card">
        <select value={currentProject} onChange={updateCurrentProject}>
          <option key="0" value="">
            Select Project
          </option>
          {projects.map((project) => {
            return (
              <option key={project.id} value={project.client_name}>
                {project.client_name}
              </option>
            );
          })}
        </select>
        {currentProject !== "" && (
          <>
            <label>Preview</label>
            <label className="switch">
              <input type="checkbox" onClick={togglePreview} />
              <span className="slider round"></span>
            </label>
          </>
        )}
      </div>
      {/* Show this div only if preview is false and currentProject is not empty as it's the only time we want to show the form (and the form is the only thing that should be in this div) */}
      {!preview && currentProject !== "" && (
        <form>
          <div className="payDates">
            <div className="form-section invoiceSection">
              <label htmlFor="invoiceDate">Invoice Date:</label>
              <input
                id="invoiceDate"
                name="invoiceDate"
                type="date"
                value={data.invoiceDate || ""}
                onChange={handleUpdate}
              />
            </div>
            <div className="form-section paySection">
              <label htmlFor="paymentDueDate">Payment due by:</label>
              <input
                id="paymentDueDate"
                name="paymentDueDate"
                type="date"
                value={data.paymentDueDate || ""}
                onChange={handleUpdate}
              />
            </div>
          </div>
          <div className="form-section checks">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="logoCreation"
                checked={data.logoCreation || false}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.checked })
                }
              />
              Logo Creation
            </label>
            {/* Todo: Loop through the data object and create a checkbox for each key instead of hardcoding them */}
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="seo"
                checked={data.seo || false}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.checked })
                }
              />
              SEO
            </label>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="design"
                checked={data.design || false}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.checked })
                }
              />
              Design
            </label>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="contentCreation"
                checked={data.contentCreation || false}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.checked })
                }
              />
              Content Creation
            </label>
          </div>
          <div className="form-section">
            <label htmlFor="logo">Notes</label>
            <input
              id="notes"
              name="notes"
              type="text"
              value={data.notes || ""}
              onChange={handleUpdate}
            />
          </div>
        </form>
      )}
      {preview && currentProject !== "" && <InvoiceGenerator data={data} />}
    </div>
  );
}

export default ProjectPage;
