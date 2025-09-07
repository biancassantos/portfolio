function Skill({ icon, name }) {
  return (
    <div className="bg-glass shadow-highlight size-[60px] rounded-sm p-3">
      <img src={icon} alt={`${name}'s icon`} title={name} />
    </div>
  )
}

export default Skill
