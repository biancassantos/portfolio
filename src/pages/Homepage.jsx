import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import AboutMe from "../components/about-me/AboutMe"
import Skills from "../components/skills/Skills"
import Projects from "../components/projects/Projects"
import Contact from "../components/contact/Contact"
import BackToTop from "../components/BackToTop"

function Homepage() {
  const mainContentRef = useRef(null)
  const headerRef = useRef(null)
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <>
      <Header headerRef={headerRef} />
      <Hero contentRef={mainContentRef} />
      <main className="mx-auto max-w-[1100px] py-15" ref={ref}>
        <AboutMe mainContentRef={mainContentRef} />
        <Skills />
        <Projects />
        <Contact />
        <BackToTop mainInView={inView} topRef={headerRef} />
      </main>
    </>
  )
}

export default Homepage
