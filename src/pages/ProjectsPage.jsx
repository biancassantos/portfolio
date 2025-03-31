import { Link } from "react-router";
import useLanguageContext from "../hooks/useLanguageContext";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { FaGithub } from 'react-icons/fa';

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
        techs={project.techs}
        />)
      })}

      <Link className="view-all" to="https://github.com/biancassantos?tab=repositories" target="_blank">
        {info.viewAllProjects} <FaGithub />
      </Link>
    </section>
  )
}

export default ProjectsPage;