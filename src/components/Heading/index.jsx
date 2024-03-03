import Greeting from "./Greeting";
import styles from "./styles.module.css";
const Heading = () => {
  return (
    <div className={styles.heading_row}>
      <h3>Mahak.</h3>

      <Greeting />

     
      <div className={styles.pinterest_container}>
      <a
          data-pin-do="embedBoard"
          data-pin-board-width="400"
          data-pin-scale-height="168"
          data-pin-scale-width="100"
          href="https://in.pinterest.com/mahakbharatkar/my-aesthetic/"
        ></a>

        <div className={styles.sub_text}>MY PINTEREST FEED</div>
      </div>

      </div>

      
        
    
  );
};

export default Heading;
