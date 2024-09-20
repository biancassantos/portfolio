/* eslint-disable react/prop-types */

const LanguageBtn = ({ text, clicked, bg }) => {
  return (
    <button 
    className={`language-btn ${bg}`} onClick={clicked}>{text}</button>
  )
}

export default LanguageBtn;