import { useLanguageContext } from "../context/LanguageContext"
import { Link } from "react-router"
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa"

function ThankYou() {
  const { content } = useLanguageContext()

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <FaCheckCircle className="text-accent animate-fade-in text-7xl" />
      <h1 className="font-gabarito text-5xl">{content.thank_you.thanks}</h1>
      <p className="text-xl">{content.thank_you.message}</p>
      <Link
        to="/"
        className="text-accent hover:text-lightgray flex items-center gap-2 p-3 font-semibold transition-colors duration-300"
      >
        <FaArrowLeft /> {content.thank_you.link}
      </Link>
    </section>
  )
}

export default ThankYou
