import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./MySkills.css";

const mySkills = [
  {
    skillsName: "HTML5",
    percentage: 95,
  },
  {
    skillsName: "CSS3",
    percentage: 95,
  },
  {
    skillsName: "JAVASCRIPT",
    percentage: 85,
  },
  {
    skillsName: "REACT.JS",
    percentage: 80,
  },
  {
    skillsName: "MONGODB",
    percentage: 60,
  },
  {
    skillsName: "EXPRESS.JS",
    percentage: 65,
  },
  {
    skillsName: "NODEJS",
    percentage: 45,
  },
  {
    skillsName: "BOOTSTRAP5",
    percentage: 95,
  },
  {
    skillsName: "TAILWINDCSS",
    percentage: 95,
  },
  {
    skillsName: "GIT",
    percentage: 85,
  },
  {
    skillsName: "REDUX",
    percentage: 50,
  },
  {
    skillsName: "GITHUB",
    percentage: 80,
  },
  {
    skillsName: "FIREBASE",
    percentage: 90,
  },
  {
    skillsName: "PYTHON",
    percentage: 50,
  },
  {
    skillsName: "TYPESCRIPT",
    percentage: 50,
  },
];

const MySkills = () => {
  return (
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
  );
};

export default MySkills;
