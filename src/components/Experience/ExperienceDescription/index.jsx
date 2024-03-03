import styles from './styles.module.css';
const ExperienceDescription = ({data={}}) => {
    const {designation, company_name, date, description}= data;
  return (
    <div className={styles.description_container}>
      <div className={styles.job_heading}>{designation} <span className={styles.green_text}>@ {company_name}</span></div>
      <div className={styles.job_duration}>{date}</div>

      <ul>
        {description.map((point)=>{
          return <li>{point}</li>
        })}
      </ul>

    </div>
  )
}

export default ExperienceDescription