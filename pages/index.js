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

      <div>
        <h3>Resume</h3>
        <div className={`${styles.resumeItem}`}>
          <h4>LabMaster / Lecturer</h4>
          <h5>
            <a href="http://www.openlab.sk">OpenLab</a>
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
                Teaching students to independently develop applications using
                web technologies (HTML, CSS, JS, PHP) and frameworks (Vue,
                Ionic, Angular, OctoberCMS)
              </li>
              <li>
                Guiding students through the entire app development lifecycle
                (specification, design, development, testing, deployment) while
                developing solutions to the real-world problems
              </li>
              <li>
                Mentoring and aiding students to develop the necessary soft
                skills (teamwork, communication, feedbacking, self-reflection)
              </li>
              <li>Development of the syllabus and teaching materials</li>
              <li>
                Contributing to the optimization and viability of the OpenLab
                project
              </li>
            </ul>
            <div className={styles.resumeItemDate}>May 2019 - present</div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>Web Developer</h4>
          <h5>
            <a href="http://www.danskebank.dk">Danske Bank</a> /{" "}
            <a href="https://danskebank.dk/bolig/sogning">Danske Bank Bolig</a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              I was a part of a team developing sunday.dk (now moved to
              danskebank.dk/bolig), a project that helps people to understand
              their finances better when finding and buying a new home.
            </p>
            <p>
              My main focus was on the frontend (React, Redux, Typescript,
              Enzyme, Webpack, Storybook), but I also contributed to the backend
              (Node, Express, Swagger, Mocha, Sequelize).
            </p>
            <p>
              I concentrated on bridging the gap between developers and
              designers, intending to make sure that we share systematic ways to
              guide and leverage our collective efforts. This lead to the
              development of our design system that helps us to stay consistent
              both in the designs and across the implementation.
            </p>
            <p>
              Stack: React, Redux, Node, Express, Typescript, PostgreSQL,
              Elasticsearch, AWS
            </p>
            <div className={styles.resumeItemDate}>
              August 2016 - March 2019 (2 years, 8 months)
            </div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>Web Developer</h4>
          <h5>
            <a href="http://www.quadric.net">Quadric</a> /{" "}
            <a href="http://www.feats.co">Feats.co</a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              I was part of a small team building a new social network using
              Meteor and React as core technologies. The social network
              eventually became www.feats.co.
            </p>
            <p>Our team:</p>
            <ul>
              <li>adheres to domain-driven development</li>
              <li>
                emphasizes writing accurate specifications in a domain-specific
                language
              </li>
              <li>
                maintains high test coverage on all levels: e2e, integration
                (Cucumber/Chimp.js) and unit tests (Karma, Enzyme)
              </li>
              <li>
                implements continuous integration server as part of the build
                process - always seeks to work with the latest technologies
              </li>
            </ul>
            <p>Stack: React, Meteor, MongoDB, Cucumber, Chimp</p>
            <div className={styles.resumeItemDate}>
              February 2016 - June 2016 (5 months)
            </div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>Junior Web Developer</h4>
          <h5>
            <a href="http://www.edocu.com">eDocu</a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              Using stickers with QR codes and NFC chips, eDocu brings you the
              right information on the spot. eDocu is a robust web application
              based on dockerized microservices using technologies like Node.js,
              Clojure and MongoDB on the backend and AngularJS on the frontend.
            </p>
            <p>My responsibilities were:</p>
            <ul>
              <li>development of new features using AngularJS</li>
              <li>design of basic UI/UX</li>
              <li>backend services in Node.js</li>
              <li>migration and utility scripts in Node.js</li>
              <li>learning from the more experienced</li>
            </ul>
            <p>Stack: AngularJS, Node, Express, MongoDB</p>
            <div className={styles.resumeItemDate}>
              Feb 2015 - Feb 2016 (1 year)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
