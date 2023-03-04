import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import "./MySkills.css";

const mySkills = [
  {
    skillsName: "HTML5",
    percentage: 95,
    clrID: "#E34C26",
  },
  {
    skillsName: "CSS3",
    percentage: 95,
    clrID: "#563D7C",
  },
  {
    skillsName: "JAVASCRIPT",
    percentage: 85,
    clrID: "#F1E05A",
  },
  {
    skillsName: "REACT.JS",
    percentage: 80,
    clrID: "#F1E05A",
  },
  {
    skillsName: "MONGODB",
    percentage: 65,
    clrID: "#89E051",
  },
  {
    skillsName: "EXPRESS.JS",
    percentage: 75,
    clrID: "#A5A5A5",
  },
  {
    skillsName: "NODEJS",
    percentage: 65,
    clrID: "#8FBE47",
  },
  {
    skillsName: "BOOTSTRAP5",
    percentage: 95,
    clrID: "#8210EA",
  },
  {
    skillsName: "TAILWINDCSS",
    percentage: 95,
    clrID: "#38BDF8",
  },
  {
    skillsName: "GIT",
    percentage: 85,
    clrID: "#E44D30",
  },
  {
    skillsName: "REDUX",
    percentage: 60,
    clrID: "#7046B2",
  },
  {
    skillsName: "GITHUB",
    percentage: 80,
    clrID: "#161B22",
  },
  {
    skillsName: "FIREBASE",
    percentage: 90,
    clrID: "#F2C22F",
  },
  {
    skillsName: "PYTHON",
    percentage: 50,
    clrID: "#336895",
  },
  {
    skillsName: "TYPESCRIPT",
    percentage: 50,
    clrID: "#0074C2",
  },
  {
    skillsName: "MySQL",
    percentage: 70,
    clrID: "#00758F",
  },
  {
    skillsName: "DaisyUI",
    percentage: 85,
    clrID: "#661AE6",
  },
];

const MySkills = () => {
  const startDate = new Date(1672509600000);
  const currentDate = new Date();

  const monthDiff =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    startDate.getMonth();

  // console.log(monthDiff + " months");

  return (
    <>
      <section>
        <h2 className="btn_heading">My Experiences</h2>
        <>
          <div className="container">
            <div className="d_flex">
              <img
                className="working_company_img"
                src="https://i.ibb.co/n3RQyyq/working-mntech.png"
                alt="working mntech digital"
              />
              <div className="d_flex flex_col">
                <p>Junior Front End Developer</p>
                <p>MNTECH DIGITAL · Full-time</p>
                <p>Feb 2023 - Present · {monthDiff} mo</p>
                <p>Barishal, Bangladesh · On-site</p>

                <p className="px_2 pt_1">
                  <span className="skills">Skills:</span> {"  "} Figma(Software)
                  · CSS3 · MySQL · <br /> Express.js · Node.js · MongoDB ·
                  React.js · <br /> HTML5 · JavaScript · Git · Networking
                </p>
              </div>
              <div className="ml_4">
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
