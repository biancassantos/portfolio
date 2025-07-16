import { createContext, useState, useEffect, useContext } from "react"
import text from "../data/text"

const LanguageContext = createContext()

export const useLanguageContext = () => useContext(LanguageContext)

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("pt")
  const [content, setContent] = useState(text[0])

  useEffect(() => {
    language === "pt" ? setContent(text[0]) : setContent(text[1])
  }, [language])

  const value = {
    language,
    setLanguage,
    content
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
