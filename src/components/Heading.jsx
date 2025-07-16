function Heading({ text, before = "", after = "" }) {
  return (
    <h2
      className={`font-gabarito text-4xl font-medium ${before} ${after} before:text-accent after:text-accent`}
    >
      {text}
    </h2>
  )
}

export default Heading
