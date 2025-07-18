import { FaArrowUp } from "react-icons/fa"

function BackToTop({ mainInView, topRef }) {
  const onClick = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={onClick}
      className={`bg-accent text-main hover:bg-lightgray fixed right-8 bottom-8 cursor-pointer rounded-full p-3 text-xl shadow-md transition-colors duration-300 ${mainInView ? "block" : "hidden"} sm:p-4 md:right-12`}
    >
      <FaArrowUp />
    </button>
  )
}

export default BackToTop
