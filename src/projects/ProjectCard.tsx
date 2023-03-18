import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
}

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

function ProjectCard({ project }: ProjectCardProps) {
  const handleEditClick = (project: Project) => console.log(project);

  return (
    // in the tutorial the surounding div is not included in ProjectCard instead it is defined in ProjectList
    <div key={project.id} className="cols-sm">
      <div className="card">
        <img src={project.imageUrl} alt={project.name} />
        <section className="section dark">
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
          <button onClick={() => handleEditClick(project)} className="bordered">
            <span className="icon-edit"></span>
            Edit
          </button>
        </section>
      </div>
    </div>
  );
}

export default ProjectCard;
