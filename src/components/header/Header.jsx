import { useLanguageContext } from "../../context/LanguageContext"
import LanguageButton from "./LanguageButton"
import brFlag from "../../assets/icons/brazil.png"
import usaFlag from "../../assets/icons/usa.png"

function Header({ headerRef }) {
  const { language, setLanguage } = useLanguageContext()

  return (
    <header
      ref={headerRef}
      className="mx-auto flex max-w-[1100px] items-center p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <LanguageButton
          flag={brFlag}
          onClick={() => setLanguage("pt")}
          isActive={language === "pt"}
          nacionality={"Brazilian"}
        />
        <LanguageButton
          flag={usaFlag}
          onClick={() => setLanguage("en")}
          isActive={language === "en"}
          nacionality={"North American"}
        />
      </div>
    </header>
  )
}

export default Header
