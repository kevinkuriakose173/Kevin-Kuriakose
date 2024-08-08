import styles from './SkillsStyles.module.css'
import checkMarkDarkIcon from '../../assets/checkmark-dark.svg'
import checkMarkLightIcon from '../../assets/checkmark-light.svg'
import {useTheme} from '../../common/ThemeContext'
import SkillList from '../../common/SkillList'
function Skills() {
  const {theme, toggleTheme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkLightIcon : checkMarkDarkIcon;

  return (
    <section id="skills" className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Flask" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
    </section>
  )
}

export default Skills