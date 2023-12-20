import React from "react";
import "./About.css";
// import myImg from "../../assets/my-img-1.jpg";
import Action from "../header/Action";

const About = () => {
  return (
    <section>
      <h2 className="btn_heading">About Me</h2>
      <div className="container">
        <div className="about_container">
          <div className="about_text_div">
            <p>
              As a self-enthusiastic Full-stack Developer,
              <br /> -I am proficient in building Full-stack web applications
              using MySQL and MongoDB for database management, Mongoose for
              modeling and schema, Node.js (Runtime) + Express.js with
              TypeScript or JavaScript, and NPM for backend architecture, with
              RESTful APIs. <br />
              -For authentication and authorization, I frequently use JWT token,
              Firebase, and Next-auth in my lot of personal and professional
              projects.
              <br />
              -For the frontend architecture, I utilize Next.js, React.js, Redux,
              React-redux, Redux-toolkit, Vanilla JavaScript, HTML5, CSS3, SCSS,
              Bootstrap 5, Tailwind CSS, and NPM.
            </p>
            <div className="action_flex_start">
              <Action />
            </div>
          </div>
          <div className="about_img_div" data-aos="zoom-in">
            <img
              src="https://i.ibb.co/hmXFHww/me-portfolio.png"
              alt="Oliullah"
              className="about_img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
