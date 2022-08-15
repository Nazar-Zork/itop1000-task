import styles from './Header.module.css';


const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        Exchanger
      </div>
      <div className={styles.header__item}>
        <div className={styles.header__course}>
          USD/UAH = {props.headerCourse.usd}
        </div>
        <div className={styles.header__course}>
          EUR/UAH = {props.headerCourse.eur}
        </div>
      </div>
    </header>
  );
}

export default Header;
