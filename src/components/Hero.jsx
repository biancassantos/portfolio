import { useLanguageContext } from "../context/LanguageContext"
import { FaRegArrowAltCircleDown } from "react-icons/fa"

function Hero({ contentRef }) {
  const { content } = useLanguageContext()

  const handleClick = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-[url('backgrounds/scribble-lg.png')] bg-right bg-no-repeat">
      <div className="mx-auto flex h-screen max-w-[1100px] flex-col items-start justify-center gap-4 px-8 py-10">
        <h1 className="font-gabarito text-7xl font-semibold text-shadow-md">
          {content.hero.greeting}
        </h1>
        <p className="font-gabarito after:animate-blink text-4xl text-shadow-md after:ml-1 after:font-semibold after:content-['\_']">
          {content.hero.stack}
        </p>
        <button
          onClick={handleClick}
          className="bg-accent text-main hover:bg-lightgray mt-4 flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 text-xl font-bold uppercase shadow-md transition-colors duration-300"
        >
          {content.hero.button}
          <FaRegArrowAltCircleDown className="text-2xl" />
        </button>
      </div>
    </section>
  )
}

export default Hero
