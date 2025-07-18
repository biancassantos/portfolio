import { useLanguageContext } from "../../context/LanguageContext"
import Heading from "../Heading"
import PhotoCard from "./PhotoCard"
import SocialLink from "./SocialLink"

function AboutMe({ mainContentRef }) {
  const { content } = useLanguageContext()

  return (
    <section
      ref={mainContentRef}
      className="flex h-screen flex-col items-center justify-center gap-10 px-8 py-12"
    >
      <Heading text={content.about} />

      <section className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <PhotoCard />
        <div className="flex flex-col items-center gap-4">
          <p className="w-full max-w-[380px] text-justify">
            {content.about_body}
          </p>
          <div className="flex items-center gap-5">
            <SocialLink
              name="LinkedIn"
              url="https://www.linkedin.com/in/biancassantos89"
            />
            <hr className="text-accent h-6 border-l-1" />
            <SocialLink name="GitHub" url="https://github.com/biancassantos" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutMe
