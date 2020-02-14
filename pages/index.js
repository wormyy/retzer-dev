import styles from "./index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <header className={`${styles.section} ${styles.header}`}>
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
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://www.linkedin.com/in/juliusretzer/"
          >
            LinkedIn
          </a>
          <a target="_blank" href="mailto:julius@retzer.dev">
            Email
          </a>
        </div>
      </header>
      <div className={`${styles.section} ${styles.intro}`}>
        <p>
          Freelance full-stack web developer based in Bratislava, Slovakia. A
          former web developer at <a href="www.danskebank.dk">Danske Bank</a>,
          currently focusing on <a href="">OpenLab</a>, where we aim to innovate
          the IT education in Slovakia.
        </p>
      </div>
    </div>
  );
}
