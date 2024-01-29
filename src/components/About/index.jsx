import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_col_1}>
        <div className={styles.about_text}>
          <h2>About me</h2>
          <div className={styles.about_subtext}>
            I'm a woman in STEM from India working on complex Frontend
            development challenges & UI designer.
          </div>
          <div className={styles.about_subtext}>
            I am also a <span className={styles.underline_text}>professional calligrapher</span>, love typography
            & <span className={styles.underline_text}>fermenting stuff</span>.
          </div>
        </div>

        <div>
          <div className={styles.find_me_at}>FIND ME AT</div>
          <div>link</div>
        </div>
      </div>
      <div className={styles.about_col_2}>
        <div className={styles.mahak_img_container}>
            <span>mahak-img</span>
        </div>
      </div>
      <div className={styles.about_col_3}></div>
    </div>
  );
};

export default About;
