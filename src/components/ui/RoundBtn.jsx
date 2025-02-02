import { Link } from "react-router";

function RoundBtn({ text, url }) {
  return (
    <button type="button" className="round-btn">
      <Link to={url}>{text}</Link>
    </button>
  )
}

export default RoundBtn;