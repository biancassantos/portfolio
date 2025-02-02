import TechIcon from './ui/TechIcon';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';

function TechIcons() {
  return (
    <div className="icons-container">
      <TechIcon name="HTML5" icon={<FaHtml5 />}/>
      <TechIcon name="CSS3" icon={<FaCss3Alt />}/>
      <TechIcon name="JavaScript" icon={<FaJsSquare />}/>
      <TechIcon name="TypesScript" icon={<BiLogoTypescript />}/>
      <TechIcon name="React" icon={<FaReact />}/>
      <TechIcon name="Git" icon={<FaGitAlt />}/>
      <TechIcon name="Figma" icon={<FaFigma />} />
    </div>
  )
}

export default TechIcons;