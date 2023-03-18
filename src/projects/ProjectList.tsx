import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const handleEdit = (project: Project) => {
    console.log(project);
  };
  const renderedProjects = projects.map((project) => (
    <div>
      <ProjectCard project={project} onEdit={handleEdit} />
      <ProjectForm />
    </div>
  ));

  return <div className="row">{renderedProjects}</div>;
}

export default ProjectList;
