import TechTag from "./ui/TechTag";

function TechTags({techs}) {
  return (
    <>
      {techs.map(tech => {
        return <TechTag key={tech} text={tech} />
      })}
    </>
  )
}

export default TechTags;