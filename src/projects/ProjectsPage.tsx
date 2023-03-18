import { MOCK_PROJECTS } from "./MockProjetcs";

function ProjectsPage() {
  const projects = JSON.stringify(MOCK_PROJECTS, null, " ");

  return (
    <>
      <h1>Projects</h1>
      <pre>{projects}</pre>
    </>
  );
}

export default ProjectsPage;
