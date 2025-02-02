import { Link } from "react-router";
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

function SocialsIcons() {
  return (
    <div className='socials-icons'>
      <Link 
      to="https://github.com/biancassantos" 
      target='_blank'
      >
        <FaGithubAlt />
      </Link>
      
      <Link 
      to="https://www.linkedin.com/in/biancassantos89/" 
      target='_blank'
      >
        <FaLinkedinIn />
      </Link>
    </div>
  )
}

export default SocialsIcons;