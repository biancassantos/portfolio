/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({ name, img, imgLink, projectLink, viewProject }) => {
  return (
    <div className="card">
      <Link to={imgLink} target="_blank">
        <img src={`../${img}`} alt={name} />
      </Link>

      <div className="card-info">
        <h3>{name}</h3>
        <Link to={projectLink} target="_blank">
          {viewProject}
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard;