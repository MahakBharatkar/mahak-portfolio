import styles from "./styles.module.css";
const technologies = ["React.js", "Next.js", "Javascript", "MySQL"];

const TechStack = () => {
  return (
    <div className={styles.techstack_container}>
      <div className={styles.technologies_container}>
        <h4>Technologies I've been working on:</h4>

        <ul>
          {technologies.map((tech) => {
            return(
                <li>{tech}</li>
            )
           
          })}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
