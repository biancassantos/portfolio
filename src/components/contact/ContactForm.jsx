import { useLanguageContext } from "../../context/LanguageContext"
import { useNavigate } from "react-router"

function ContactForm() {
  const { content } = useLanguageContext()
  const navigate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append("access_key", "39d5dec6-5d1d-4cf5-9e54-8a2c7cb89f35")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      event.target.reset()
      navigate("/thank-you")
    } else {
      console.log("Error", data)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="shadow-form flex w-full max-w-[430px] flex-col gap-8 rounded-sm px-6 py-10"
    >
      <input type="hidden" name="subject" value="Nova mensagem via Portfolio" />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold">
          {content.form.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border-b-accent border-b px-1 py-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-b-accent border-b px-1 py-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          {content.form.message}
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={10}
          className="border-b-accent resize-none border-b px-1 py-2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-accent text-main hover:bg-lightgray mt-3 cursor-pointer rounded-full p-3 font-bold uppercase transition-colors duration-300"
      >
        {content.form.submit}
      </button>
    </form>
  )
}

export default ContactForm
