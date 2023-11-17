import styles from './Banner.module.css'

function Banner(props) {
  return (
    <div className={styles.container}>
      <img src={props.imageSrc} alt={props.altText} className={styles.container} />
    </div>
  );
}

export default Banner;