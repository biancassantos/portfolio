import { Outlet } from "react-router";
import LanguageSelector from "../components/LanguageSelector";
import Hero from "../components/Hero";
import NavPages from "../components/ui/NavPages";

function Homepage() {
  return (
    <>
      <LanguageSelector />
      <main>
        <Hero />
        <NavPages />
        <Outlet />
      </main>
    </>
  )
}

export default Homepage;