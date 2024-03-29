import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { Layer, Line, Stage } from "react-konva";
import ProjectCard from "./components/ProjectCard";
import githubLogo from '/logos/github_logo2.svg';
import instagramLogo from '/logos/instagram_logo2.svg';
import linkedinLogo from '/logos/linkedin_logo2.svg';

const projects = [
  {
    title: "CryptoApp",
    url: "https://github.com/MahakBharatkar/crypto-app",
    description: "Cryptocurrency tracking webapp",
  },
  {
    title: "Task Manager",
    url: "https://github.com/MahakBharatkar/tick-it",
    description: "Task manager app",
  },
  {
    title: "Habit Tracker App",
    url: "https://github.com/MahakBharatkar/habit-tracker-v1",
    description: "Habit Tracker App",
  },
];

const LOGO_MAPPING =[githubLogo, linkedinLogo, instagramLogo];


const About = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

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
            I am also a{" "}
            <span className={styles.underline_text}>
              professional calligrapher
            </span>
            , love typography &{" "}
            <span className={styles.underline_text}>fermenting stuff</span>.
          </div>
        </div>

        <div>
          <div className={styles.find_me_at}>FIND ME AT
          <div className={styles.social_logos_container}>
            {LOGO_MAPPING.map((item)=>{
              return (
                <img src={item} alt="logo" width={40} height={40} style={{margin: '10px'}} key={item}></img>
              )
            })}
          
         
          </div>
          
          </div>
        </div>
      </div>
      <div className={styles.about_col_2}>
        <span className={styles.moustache_text}>Draw a moustache on me!!</span>
        <div className={styles.mahak_img_container}>
          <Stage
            width={376}
            height={486}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
          >
            <Layer>
              {lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke="#ef5d70"
                  strokeWidth={5}
                  tension={0.5}
                  lineCap="round"
                  lineJoin="round"
                  globalCompositeOperation={"source-over"}
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>

      <div className={styles.about_col_3}>
        <h4>PERSONAL PROJECTS</h4>
        <div className={styles.experiments_container}>
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
