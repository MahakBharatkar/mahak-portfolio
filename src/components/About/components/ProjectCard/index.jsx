import styles from './styles.module.css';
const ProjectCard = ({project={}}) => {
    const { title='', url='', description=''}= project;

  return (
    <div className={styles.project_card} role='presentation' onClick={()=> window.open(url)}>
        <h3>{title}</h3>
        <div className={styles.description_text}>{description}</div>
    </div>
  )
}

export default ProjectCard