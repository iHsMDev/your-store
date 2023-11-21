import styles from "./Header.module.css";
const Header = ({ text }: { text: string }) => {
  return (
    <header className={styles.header}>
      <h4 className={styles.text}>{text}</h4>
      {/* <hr className={styles.line} /> */}
    </header>
  );
};

export default Header;
