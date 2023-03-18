import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const renderedProjects = projects.map((project) => (
    <div>
      <ProjectCard project={project} />
      <ProjectForm />
    </div>
  ));

  return <div className="row">{renderedProjects}</div>;
}

export default ProjectList;
