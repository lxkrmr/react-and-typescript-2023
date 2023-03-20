import { Link } from "react-router-dom";
import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

function ProjectCard({ project, onEdit }: ProjectCardProps) {
  const handleEditClick = onEdit;

  return (
    // in the tutorial the surounding div is not included in ProjectCard instead it is defined in ProjectList
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <Link to={"/projects/" + project.id}>
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <button onClick={() => handleEditClick(project)} className="bordered">
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
