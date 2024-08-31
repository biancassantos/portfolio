import { useOutletContext } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects";

const ProjectsPage = () => {
  const [info] = useOutletContext();

  return (
    <section className="projects-container">
      {projects.map((project) => {
        return (<ProjectCard 
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