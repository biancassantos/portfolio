function LanguageBtn({ text, onClick, isActive }) {
  return (
    <button 
    type="button"
    className={`language-btn ${isActive && "active-btn"}`} 
    onClick={onClick}>
      {text}
    </button>
  )
}

export default LanguageBtn;