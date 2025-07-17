import { useRef } from "react"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import AboutMe from "../components/about-me/AboutMe"
import Skills from "../components/skills/Skills"
import Projects from "../components/projects/Projects"
import Contact from "../components/contact/Contact"

function Homepage() {
  const mainContentRef = useRef(null)

  return (
    <>
      <Header />
      <Hero contentRef={mainContentRef} />
      <main className="mx-auto max-w-[1100px] py-15">
        <AboutMe mainContentRef={mainContentRef} />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Homepage
