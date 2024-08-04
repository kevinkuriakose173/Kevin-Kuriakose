import styles from './ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import spotifyProjectIcon from '../../assets/Spotify-Playlist-Creator.png'
import rutgersProjectIcon from '../../assets/Rutgers-Logo.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={spotifyProjectIcon} 
          link="https://drive.google.com/file/d/1OQeM5nqhu_r_2fbkvtBibWnqnZqa666k/view" h3="Spotify Stats Tracker and Music Recommendation System" />
        <ProjectCard 
          src={rutgersProjectIcon} 
          link="https://drive.google.com/file/d/1tHim2gPkt2R96u9NEZY0tcjmz69isah-/view" h3="Rutgers Prerequisite Checker" />
      </div>
    </section>
  )
}

export default Projects