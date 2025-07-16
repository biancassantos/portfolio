import { useRef } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"

function Homepage() {
  const mainContentRef = useRef(null)

  return (
    <>
      <Header />
      <Hero contentRef={mainContentRef} />
      <main></main>
    </>
  )
}

export default Homepage
