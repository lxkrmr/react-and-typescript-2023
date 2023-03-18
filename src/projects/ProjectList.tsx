import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const renderedProjects = projects.map((project) => (
    <ProjectCard project={project} />
  ));

  return <div className="row">{renderedProjects}</div>;
}

export default ProjectList;
