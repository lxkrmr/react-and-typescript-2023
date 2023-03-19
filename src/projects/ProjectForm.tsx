import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
  project: Project;
  onChancel: () => void;
  onSave: (project: Project) => void;
}

type InputType = "checkbox" | "number" | "string";

function ProjectForm({
  project: initialProject,
  onChancel,
  onSave,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;

    const change = {
      [name]: updatedValue(type as InputType, value, checked),
    };

    setProject((cur) => new Project({ ...cur, ...change }));
  };

  const updatedValue = (
    type: InputType,
    value: string,
    checked: Boolean
  ): Boolean | number | string => {
    switch (type) {
      case "checkbox":
        return checked;
      case "number":
        return Number(value);
      default:
        return value;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input
        value={project.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="enter name"
      />

      <label htmlFor="description">Project Description</label>
      <textarea
        value={project.description}
        onChange={handleChange}
        name="description"
        placeholder="enter description"
      ></textarea>

      <label htmlFor="budget">Project Budget</label>
      <input
        value={project.budget}
        onChange={handleChange}
        type="number"
        name="budget"
        placeholder="enter budget"
      />

      <label htmlFor="isActive">Active?</label>
      <input
        checked={project.isActive}
        onChange={handleChange}
        type="checkbox"
        name="isActive"
      />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button onClick={onChancel} type="button" className="bordered medium">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
