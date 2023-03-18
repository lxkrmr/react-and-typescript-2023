import { Project } from "./Project";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };
  const renderedProjects = projects.map((project) => (
    <div>
      <ProjectCard project={project} onEdit={handleEdit} />
      {projectBeingEdited === project && <ProjectForm />}
    </div>
  ));

  return <div className="row">{renderedProjects}</div>;
}

export default ProjectList;
