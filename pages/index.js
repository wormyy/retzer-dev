import styles from "./index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
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
            former web developer at{" "}
            <a href="http://www.danskebank.dk">Danske Bank</a>, currently
            focusing on <a href="http://www.openlab.sk">OpenLab</a>, where we
            aim to innovate the IT education in Slovakia.
          </p>
        </div>
      </div>

      <div className={`${styles.resume}`}>
        <h3>Resume</h3>
        <h4>Web Developer</h4>
        <h5>
          <a href="http://www.danskebank.dk">Danske Bank</a>
        </h5>
        <div className={`${styles.resumeText}`}>
          <p>
            OpenLab is a non-profit education project aiming to dramatically
            improve IT education in Slovakia by bridging the gap between high
            schools and the private sector.
          </p>
          <p>My responsibilities include:</p>
          <ul>
            <li>
              Creating a safe and free environment for the students to grow
              professionally and personally
            </li>
            <li>
              Teaching students to independently develop applications using web
              technologies (HTML/CSS/JS/PHP) and frameworks (Vue, Ionic,
              OctoberCMS)
            </li>
            <li>
              Guiding students through the entire app development lifecycle
              (specification, design, development, testing, deployment) while
              developing solutions to the real-world problems
            </li>
            <li>
              Mentoring and aiding students to develop the necessary soft skills
              (teamwork, communication, feedbacking, self-reflection)
            </li>
            <li>Development of the syllabus and teaching materials</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
