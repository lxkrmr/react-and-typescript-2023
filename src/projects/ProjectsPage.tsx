import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjetcs";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    const updatedProjects = projects.map((curr) =>
      curr.id === project.id ? project : curr
    );

    setProjects(updatedProjects);
  };

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} onSave={saveProject} />
    </>
  );
}

export default ProjectsPage;
