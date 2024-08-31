import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LanguageBtn from "../components/ui/LanguageBtn";
import Hero from "../components/Hero.jsx";
import infos from "../infos.js";

const Homepage = () => {
  const [info, setInfo] = useState(infos[0]);
  const [port, setPort] = useState(true);
  const [eng, setEng] = useState(false);

  function showPt() {
    setPort(true)
    setEng(false)
    setInfo(infos[0])
  }

  function showEn() {
    setPort(false)
    setEng(true)
    setInfo(infos[1])
  }

  return (
    <>
      <div className="language">
        <LanguageBtn text="pt-br" clicked={showPt} bg={port ? 'btn-bg' : ''} />
        <LanguageBtn text="en-us" clicked={showEn} bg={eng ? 'btn-bg' : ''} />
      </div>
      <main>
        <Hero phrase1={info.phrase1} phrase2={info.phrase2} contactBtn={info.contactBtn} />
        <nav className="nav-pages">
          <NavLink to="about">{info.aboutBtn}</NavLink>
          <NavLink to="projects">{info.projectsBtn}</NavLink>
        </nav>
        <Outlet context={[info]} />
      </main>
    </>
  )
}

export default Homepage;