import { Link } from "react-router"

function SocialLink({ name, url }) {
  return (
    <Link
      to={url}
      className="hover:text-accent p-3 font-bold transition-colors duration-300"
    >
      {name}
    </Link>
  )
}

export default SocialLink
