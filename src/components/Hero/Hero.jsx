import styles from './HeroStyles.module.css'
import heroImg from '../../assets/avatar.png'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import resume from '../../assets/resume.pdf'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile Picture" />
                <img 
                    className={styles.colorMode} 
                    src={themeIcon}    
                    alt="color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>Kevin <br/> Kuriakose</h1>
                <h2>Software Developer</h2>
                <span>
                    <a href="https://linkedin.com/in/kevinkuriakose1" target="_blank">
                        <img src={linkedinIcon} alt="linkedin icon"/>
                    </a>
                    <a href="https://github.com/kevinkuriakose173" target="_blank">
                        <img src={githubIcon} alt="github icon"/>
                    </a>
                </span>
                <p className='description'>
                    A Rutgers Computer Science Student looking to code some stuff ig
                </p>
                <a href={resume} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero