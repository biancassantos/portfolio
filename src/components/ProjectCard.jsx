import { Link } from "react-router";
import TechTags from "./TechTags";
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function ProjectCard({ name, img, imgLink, projectLink, viewProject, techs }) {
  return (
    <section className="card">
      <Link to={imgLink} target="_blank">
        <img src={img} alt={name} />
      </Link>
      
      <section className="card-info">
        <h3>{name}</h3>
        <section className="techs-container">
          <TechTags techs={techs} />
        </section>
        <Link to={projectLink} target="_blank">
          {viewProject} <FaArrowUpRightFromSquare />
        </Link>
      </section>
    </section>
  )
}

export default ProjectCard;