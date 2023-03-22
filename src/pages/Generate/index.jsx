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
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="generatorContainer">
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
      {!preview && currentProject !== "" && (
        <form>
          <div className="payDates">
            <div className="form-section">
              <label htmlFor="invoiceDate">Invoice Date:</label>
              <input
                id="invoiceDate"
                name="invoiceDate"
                type="date"
                value={data.invoiceDate || ""}
                onChange={handleUpdate}
              />
            </div>
            <div className="form-section">
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
