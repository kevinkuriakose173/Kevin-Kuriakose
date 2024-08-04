function SkillList({src, skill}) {
  return (
    <span>
      <img src={src} alt="Checkmark Icon"></img>
      <p>{skill}</p>
    </span>
  )
}

export default SkillList