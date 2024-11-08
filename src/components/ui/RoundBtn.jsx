/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RoundBtn = ({ text, url }) => {
  return (
    <button type="button" className="round-btn">
      <Link to={url}>{text}</Link>
    </button>
  )
}

export default RoundBtn