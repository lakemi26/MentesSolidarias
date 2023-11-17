import styles from './Navbar.BannerHome.css'

function Banner(props) {
  return (
    <div className={Styles.container}>
      <img src={props.imageSrc} alt={props.altText} className={styles.container} />
    </div>
  );
}

export default Banner;