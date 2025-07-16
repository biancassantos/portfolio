function LanguageButton({ flag, onClick, isActive, nacionality }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-b-2 ${isActive ? "border-accent" : "hover:border-lightgray border-transparent"} cursor-pointer p-2 transition-colors duration-200`}
    >
      <img src={flag} alt={`${nacionality} flag`} className="w-[30px]" />
    </button>
  )
}

export default LanguageButton
