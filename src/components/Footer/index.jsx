import styles from "./styles.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_text}>
        You have a crazy, challenging, fun or creative idea you'd like help
        building?{" "}
        <a href="mailto:mahakbharatkar21@gmail.com">
          <span className={styles.underline_text}>Say less </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
