import { Project } from "./Project";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => setProjectBeingEdited({});

  const renderedProjects = projects.map((project) => (
    <div>
      {project === projectBeingEdited ? (
        <ProjectForm onChancel={cancelEditing} onSave={onSave} />
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));

  return <div className="row">{renderedProjects}</div>;
}

export default ProjectList;
