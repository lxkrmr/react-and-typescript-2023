import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
  project: Project;
  onChancel: () => void;
  onSave: (project: Project) => void;
}

type InputType = "checkbox" | "number" | "string";

class Errors {
  constructor(
    public name: string = "",
    public description: string = "",
    public budget: string = ""
  ) {}
}

function ProjectForm({
  project: initialProject,
  onChancel,
  onSave,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState(new Errors());

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isValid()) {
      onSave(project);
    }
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;

    const change = {
      [name]: updatedValue(type as InputType, value, checked),
    };

    setProject((cur) => {
      const updated = new Project({ ...cur, ...change });
      setErrors(() => validate(updated));
      return updated;
    });
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

  const validate = (project: Project) => {
    const errors = new Errors();

    if (project.name.length === 0) {
      errors.name = "Name is required.";
    } else if (project.name.length < 3) {
      errors.name = "Name needs to be at last 3 charactars.";
    }

    if (project.description.length === 0) {
      errors.description = "Description is required.";
    }

    if (project.budget === 0) {
      errors.budget = "Budget must be more than $0.";
    }

    return errors;
  };

  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
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
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}

      <label htmlFor="description">Project Description</label>
      <textarea
        value={project.description}
        onChange={handleChange}
        name="description"
        placeholder="enter description"
      ></textarea>
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}

      <label htmlFor="budget">Project Budget</label>
      <input
        value={project.budget}
        onChange={handleChange}
        type="number"
        name="budget"
        placeholder="enter budget"
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}

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
