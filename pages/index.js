import styles from "./index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.personalInfo}>
        <div className={styles.faceContainer}>
          <img src="/face.jpg" className={styles.face} />
        </div>
        <h1 className={styles.name}>Július Retzer</h1>
        <div className={styles.links}>
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://github.com/wormyy"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://stackoverflow.com/users/3992613/j%c3%balius-retzer"
          >
            StackOverflow
          </a>
          <a target="_blank" href="mailto:julius@retzer.dev">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
