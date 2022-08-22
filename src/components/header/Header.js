import styles from './Header.module.css';


const Header = ({usd, eur}) => (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        Exchanger
      </div>
      <div className={styles.header__item}>
        <div className={styles.header__course}>
          USD/UAH = {usd}
        </div>
        <div className={styles.header__course}>
          EUR/UAH = {eur}
        </div>
      </div>
    </header>
);

export default Header;
