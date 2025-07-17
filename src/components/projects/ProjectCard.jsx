import { Link } from "react-router"
import { FaGithub } from "react-icons/fa"

function ProjectCard({ img, name, url, repository }) {
  return (
    <div className="bg-glass shadow-highlight m-2 w-[280px] shrink-0 rounded-sm p-2">
      <Link to={url} target="_blank">
        <img src={img} alt="Project thumbnail" />
      </Link>

      <div className="flex items-center justify-between py-3">
        <h3 className="text-lg">{name}</h3>
        <Link
          to={repository}
          target="_blank"
          className="hover:text-accent text-2xl transition-colors duration-300"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
