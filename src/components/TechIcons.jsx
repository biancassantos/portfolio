import html from '../assets/tech-icons/html5.svg';
import css from '../assets/tech-icons/css3.svg';
import js from '../assets/tech-icons/javascript.svg';
import ts from '../assets/tech-icons/typescript.svg';
import react from '../assets/tech-icons/react.svg';
import tailwind from '../assets/tech-icons/tailwindcss.svg';
import git from '../assets/tech-icons/git.svg';
import figma from '../assets/tech-icons/figma.svg';

function TechIcons() {
  return (
    <section className="icons-container">
      <img src={html} alt="HTML5's icon" />
      <img src={css} alt="CSS3's icon" />
      <img src={js} alt="JavaScript's icon" />
      <img src={ts} alt="TypeScript's icon" />
      <img src={react} alt="React's icon" />
      <img src={tailwind} alt="Tailwindcss' icon" />
      <img src={git} alt="Git's icon" />
      <img src={figma} alt="Figma's icon" />
    </section>
  )
}

export default TechIcons;