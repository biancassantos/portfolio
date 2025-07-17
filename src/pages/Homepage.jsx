import { useRef } from "react"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import AboutMe from "../components/about-me/AboutMe"
import Skills from "../components/skills/Skills"

function Homepage() {
  const mainContentRef = useRef(null)

  return (
    <>
      <Header />
      <Hero contentRef={mainContentRef} />
      <main className="mx-auto max-w-[1100px] py-15">
        <AboutMe mainContentRef={mainContentRef} />
        <Skills />
      </main>
    </>
  )
}

export default Homepage
