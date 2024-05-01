import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo">
        <h1>
          <a href="/">blog client</a>
        </h1>
      </div>
      <ul className={styles.links}>
        <li>
          <a href="/users/login">Login</a>
        </li>
        <li>
          <a href="/users/signup">Signup</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
