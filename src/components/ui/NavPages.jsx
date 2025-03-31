import { useRef, useEffect } from "react";
import { NavLink } from "react-router";
import useLanguageContext from "../../hooks/useLanguageContext";

function NavPages() {
  const { info } = useLanguageContext();
  const linkRef = useRef(null);

  useEffect(() => {
    linkRef.current.click();
  }, [])

  return (
    <nav className="nav-pages">
      <NavLink ref={linkRef} to="/about">{info.aboutBtn}</NavLink>
      <NavLink to="/projects">{info.projectsBtn}</NavLink>
    </nav>
  )
}

export default NavPages;