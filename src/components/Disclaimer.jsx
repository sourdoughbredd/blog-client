import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    // <header className={styles.disclaimer}>
    <div className={styles.disclaimer}>
      <h2>Disclaimer</h2>
      <h3>
        This site was only created to demonstrate the functionality of the Blog
        API backend, so it lacks in the beauty department. Click{" "}
        <a href="https://github.com/sourdoughbredd/blog-api">here</a> to see the
        API documentation and code.
      </h3>
    </div>
    // </header>
  );
};

export default Disclaimer;
