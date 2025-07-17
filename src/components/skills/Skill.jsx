function Skill({ icon, name }) {
  return (
    <div className="bg-glass shadow-highlight size-[60px] rounded-sm p-3">
      <abbr title={name}>
        <img src={icon} alt={`${name}'s icon`} />
      </abbr>
    </div>
  )
}

export default Skill
