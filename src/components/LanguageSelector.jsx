import useLanguageContext from "../hooks/useLanguageContext";
import LanguageBtn from "./ui/LanguageBtn";

function LanguageSelector() {
  const { language, setLanguage } = useLanguageContext();

  return (
    <header className="language">
      <LanguageBtn 
      text="pt-br" 
      onClick={() => setLanguage("pt")} 
      isActive={language === "pt"} />
      <LanguageBtn 
      text="en-us" 
      onClick={() => setLanguage("en")} 
      isActive={language === "en"} />
    </header>
  )
}

export default LanguageSelector;