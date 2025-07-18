import { useLanguageContext } from "../../context/LanguageContext"
import { FaRegArrowAltCircleDown } from "react-icons/fa"

function Hero({ contentRef }) {
  const { content } = useLanguageContext()

  const handleClick = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-[url('../../../public/backgrounds/scribble-md.png')] bg-left bg-no-repeat md:bg-[url('../../../public/backgrounds/scribble-lg.png')] lg:bg-right">
      <div className="mx-auto flex h-screen max-w-[1100px] flex-col items-start justify-center gap-4 px-8 py-10">
        <h1 className="font-gabarito text-6xl font-semibold text-shadow-md sm:text-7xl">
          {content.hero.greeting}
        </h1>
        <p className="font-gabarito after:animate-blink text-3xl text-shadow-md after:ml-1 after:font-semibold after:content-['\_'] sm:text-4xl">
          {content.hero.stack}
        </p>
        <button
          onClick={handleClick}
          className="bg-accent text-main hover:bg-lightgray mt-4 flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 text-lg font-bold uppercase shadow-md transition-colors duration-300 sm:text-xl"
        >
          {content.hero.button}
          <FaRegArrowAltCircleDown className="text-2xl" />
        </button>
      </div>
    </section>
  )
}

export default Hero
