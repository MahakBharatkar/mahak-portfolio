import Greeting from './Greeting';
import styles from './styles.module.css';
const Heading = () => {
  return (
    <div className={styles.heading_row}>

      <h3>Mahak.</h3>
      <Greeting />
      <iframe src="https://assets.pinterest.com/ext/embed.html?id=897553400730951659" height="200" width="200" frameborder="0"></iframe>
    </div>
  )
}

export default Heading;