import { useLanguageContext } from "../../context/LanguageContext"
import Heading from "../Heading"
import Skill from "./Skill"
import skills from "../../data/skills"

function Skills() {
  const { content } = useLanguageContext()

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-10 px-8 py-12">
      <Heading text={content.skills} after="after:content-['(_)']" />

      <section className="grid w-full max-w-[500px] grid-cols-(--skills-grid-cols) justify-items-center gap-8">
        {skills.map((skill) => {
          return <Skill key={skill.name} icon={skill.icon} name={skill.name} />
        })}
      </section>
    </section>
  )
}

export default Skills
