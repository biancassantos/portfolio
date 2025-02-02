import useLanguageContext from "../hooks/useLanguageContext";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function ProjectsPage() {
  const { info } = useLanguageContext();

  return (
    <section className="projects-container">
      {projects.map((project) => {
        return (
        <ProjectCard 
        key={project.id}
        name={project.name}
        img={project.img}
        imgLink={project.imgLink}
        projectLink={project.projectLink}
        viewProject={info.viewProject}
        />)
      })}
    </section>
  )
}

export default ProjectsPage;