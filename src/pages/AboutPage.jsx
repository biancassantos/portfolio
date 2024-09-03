import { useOutletContext } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import ItemsList from "../components/ui/ItemsList";
import TechIcon from "../components/ui/TechIcon";
import pfp from '../assets/pfp.jpg'

const AboutPage = () => {
  const [info] = useOutletContext();

  return (
    <section className="about-page-container">
      <img src={pfp} alt="Bianca Santos" />
      <article className="about-text">
        <div>
          <h2>{info.title1}</h2>
          <ItemsList list={info.about} />
        </div>

        <div>
          <h2>{info.title2}</h2>
          <ItemsList list={info.certificates} />
        </div>

        <div>
          <h2>{info.title3}</h2>
          <div className="icons-container">
            <TechIcon name="HTML5" icon={<FaHtml5 />}/>
            <TechIcon name="CSS3" icon={<FaCss3Alt />}/>
            <TechIcon name="Javascript" icon={<FaJs />}/>
            <TechIcon name="React" icon={<FaReact />}/>
            <TechIcon name="Git" icon={<FaGitAlt />}/>
            <TechIcon name="Figma" icon={<FaFigma />} />
          </div>
        </div>
      </article>
    </section>
  )
}

export default AboutPage;