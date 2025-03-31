import useLanguageContext from '../hooks/useLanguageContext';
import ItemsList from "../components/ItemsList";
import TechIcons from '../components/TechIcons';
import pfp from "../assets/profile-sm.jpg"

function AboutPage() {
  const { info } = useLanguageContext();

  return (
    <section className="about-page-container">
      <img src={pfp} alt="Bianca Santos" />
      <article className="about-text">
        <section>
          <h2>{info.aboutTitle}</h2>
          <ItemsList list={info.about} />
        </section>

        <section>
          <h2>{info.certificatesTitle}</h2>
          <ItemsList list={info.certificates} />
        </section>

        <section>
          <h2>{info.techsTitle}</h2>
          <TechIcons />
        </section>
      </article>
    </section>
  )
}

export default AboutPage;