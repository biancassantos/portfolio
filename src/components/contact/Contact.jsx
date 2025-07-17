import { useLanguageContext } from "../../context/LanguageContext"
import Heading from "../Heading"
import ContactForm from "./ContactForm"

function Contact() {
  const { content } = useLanguageContext()

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-8 py-12">
      <Heading text={content.contact} />
      <ContactForm />
    </section>
  )
}

export default Contact
