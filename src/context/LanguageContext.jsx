import { createContext, useEffect, useState } from "react";
import infos from "../data/infos";

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("pt");
  const [info, setInfo] = useState(infos[0])

  useEffect(() => {
    if (language === "pt") setInfo(infos[0]);
    if (language === "en") setInfo(infos[1]);
  }, [language])

  const value = {
    language,
    setLanguage,
    info
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider;