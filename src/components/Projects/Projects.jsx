import styles from './ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import spotifyProjectIcon from '../../assets/Spotify-Playlist-Creator.png'
import rutgersProjectIcon from '../../assets/Rutgers-Logo.png'
import todolistIcon from '../../assets/todolistIcon.png'
import expenseTrackerIcon from '../../assets/ExpenseTrackerIcon.png'

function Projects() {

  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={spotifyProjectIcon} 
          link="https://drive.google.com/file/d/1OQeM5nqhu_r_2fbkvtBibWnqnZqa666k/view" 
          h3="Spotify Stats Tracker and Music Recommendation System" 
          gitlink="https://github.com/kevinkuriakose173/spotify-playlist-creator"
        />
        <ProjectCard 
          src={rutgersProjectIcon} 
          link="https://drive.google.com/file/d/1oc_7SziOn3kDenbZEX-ephbhEasc4cyT/view" 
          h3="Rutgers Prerequisite Checker" 
          gitlink="https://github.com/kevinkuriakose173/ComputerScienceSchedulePlanner"
        />
        <ProjectCard 
          src={todolistIcon}
          link="https://drive.google.com/file/d/1JNf_QUYj2rCqG7J4Y7u9XEdopik0N35D/view" 
          h3="ToDo List App" 
          gitlink="https://github.com/kevinkuriakose173/todoListApp"
        />
        <ProjectCard
          src={expenseTrackerIcon}
          link="https://drive.google.com/file/d/11h7uTvam7ODU8YgaulI9Wwvz0oq5RRVh/view"
          h3="Expense Tracker"
          gitlink="https://github.com/kevinkuriakose173/expense-tracker"
        />
      </div>
    </section>
  )
}

export default Projects