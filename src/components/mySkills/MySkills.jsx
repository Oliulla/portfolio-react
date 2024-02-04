import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import "./MySkills.css";

const mySkills = [
  {
    skillsName: "JavaScript",
    percentage: 85,
    clrID: "#F1E05A",
  },
  {
    skillsName: "TypeScript",
    percentage: 75,
    clrID: "#0074C2",
  },
  {
    skillsName: "Python",
    percentage: 65,
    clrID: "#336895",
  },
  {
    skillsName: "SQL",
    percentage: 75,
    clrID: "#2687CE",
  },
  {
    skillsName: "MySQL",
    percentage: 80,
    clrID: "#00758F",
  },
  {
    skillsName: "MongoDB",
    percentage: 80,
    clrID: "#89E051",
  },
  {
    skillsName: "Mongoose",
    percentage: 80,
    clrID: "#800",
  },
  {
    skillsName: "Sequelize",
    percentage: 70,
    clrID: "#52B0E7",
  },
  {
    skillsName: "NodeJS",
    percentage: 80,
    clrID: "#8FBE47",
  },
  {
    skillsName: "ExpressJS",
    percentage: 80,
    clrID: "#A5A5A5",
  },
  {
    skillsName: "NPM",
    percentage: 70,
    clrID: "#231F20",
  },
  {
    skillsName: "GraphQL",
    percentage: 60,
    clrID: "#E63BAE",
  },
  {
    skillsName: "JWT",
    percentage: 70,
    clrID: "#FFFFFF",
  },
  {
    skillsName: "Firebase",
    percentage: 90,
    clrID: "#F2C22F",
  },
  {
    skillsName: "Oauth",
    percentage: 75,
    clrID: "#000000",
  },
  {
    skillsName: "ReactJS",
    percentage: 90,
    clrID: "#149ECA",
  },
  {
    skillsName: "NextJS",
    percentage: 75,
    clrID: "#1A1A1A",
  },
  {
    skillsName: "VueJS",
    percentage: 50,
    clrID: "#42b883",
  },
  {
    skillsName: "Redux",
    percentage: 70,
    clrID: "#764ABC",
  },
  {
    skillsName: "React-redux",
    percentage: 75,
    clrID: "#764ABC",
  },
  {
    skillsName: "Redux-toolkit",
    percentage: 80,
    clrID: "#BA8FFF",
  },
  {
    skillsName: "HTML5",
    percentage: 95,
    clrID: "#E44D26",
  },
  {
    skillsName: "CSS3",
    percentage: 95,
    clrID: "#563D7C",
  },
  {
    skillsName: "Sass",
    percentage: 95,
    clrID: "#CF649A",
  },
  {
    skillsName: "Bootstrap 5",
    percentage: 95,
    clrID: "#8210EA",
  },
  {
    skillsName: "TailwindCSS",
    percentage: 95,
    clrID: "#38BDF8",
  },
  {
    skillsName: "Material UI",
    percentage: 55,
    clrID: "#007FFF",
  },
  {
    skillsName: "DaisyUI",
    percentage: 90,
    clrID: "#661AE6",
  },
  {
    skillsName: "Git",
    percentage: 90,
    clrID: "#F54D27",
  },
  {
    skillsName: "Figma",
    percentage: 90,
    clrID: "#0ACF83",
  },
  {
    skillsName: "Github",
    percentage: 95,
    clrID: "#010409",
  },
  {
    skillsName: "Trello",
    percentage: 95,
    clrID: "#0A5DD2",
  },
  {
    skillsName: "Jira",
    percentage: 80,
    clrID: "#2684FF",
  },
  {
    skillsName: "ClickUp",
    percentage: 95,
    clrID: "#FF884F", // working last
  },
  {
    skillsName: "Networking",
    percentage: 25,
    clrID: "#161B22",
  },
];

const MySkills = () => {
  // MNTECH DIGITAL experience
  const startDate = new Date(1672509600000);
  // const currentDate = new Date();
  // console.log(currentDate.getFullYear(), currentDate.getMonth())
  const currentDate = {
    getFullYear: 2023,
    getMonth: 9,
  };

  const monthDiff =
    (currentDate.getFullYear - startDate.getFullYear()) * 12 +
    currentDate.getMonth -
    startDate.getMonth();

  // console.log(monthDiff + " months");

  return (
    <>
      <section>
        <h2 className="btn_heading">My Experiences</h2>
        <>
          <div className="container">
            <div className="d_flex">
              <div className="img_container">
                <img
                  className="working_company_img"
                  src="https://i.ibb.co/Tt8jbsM/mntech-workplace.png"
                  alt="working mntech digital"
                />
              </div>
              <div className="d_flex flex_col skills_designation">
                <h2>Junior Full-stack Developer</h2>

                <p>
                  MNTECH DIGITAL (
                  <a href="https://mntechdigital.com" target="_blank" rel="noreferrer">
                    https://mntechdigital.com
                  </a>
                  ) · Full-time
                </p>
                <p>Feb 2023 - Oct 2023 · {monthDiff} mo</p>
                <p>Barishal, Bangladesh · On-site</p>

                <p className="pt_1">
                  <span className="skills">Skills :</span> JavaScript |
                  TypeScript | Python | SQL | MySQL | MongoDb | Mongoose |
                  Sequelize | NodeJS | ExpressJS | NPM | GraphQL | JWT |
                  Firebase | Oauth | ReactJS | NextJS | VueJS | Redux |
                  React-redux | Redux-toolkit | HTML5 | CSS3 | Sass | Bootstrap5
                  | TailwindCSS | MaterialUI | Github | Git | Figma | Trello |
                  ClickUp | Jira | Computer Networking
                </p>
              </div>
              <div className="ml_4 pt_1 sm_ml_0">
                <Link to="/projects" className="btn">
                  See Projects
                </Link>
              </div>
            </div>
          </div>
        </>
      </section>

      <section>
        <h2 className="btn_heading">My skills</h2>
        <div className="container flex">
          {mySkills.map((sk, i) => {
            return (
              <div key={i} className="skills_circle">
                <h4>{sk.skillsName}</h4>
                <CircularProgressbar
                  value={sk.percentage}
                  text={`${sk.percentage}%`}
                  counterClockwise={true}
                  styles={buildStyles({
                    textColor: "red",
                    pathColor: `${sk?.clrID}`,
                    // trailColor: "gold",
                  })}
                />
              </div>
            );
          })}

          {/* <div style={{ width: 120, height: 120 }}>
            <h2>CSS3</h2>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            counterClockwise={true}
          />
        </div> */}
        </div>
      </section>
    </>
  );
};

export default MySkills;
