import React from 'react';
import "./About.css";
import myImg from "../../assets/my-img-1.jpg";
import Action from '../header/Action';

const About = () => {
    return (
        <section>
            <h2 className='btn_heading'>About Me</h2>
            <div className="container">
                <div className="about_container">
                    <div className="about_text_div">
                        <p>
                            Hi, I am Md Oliullah Sarder, a self enthusiastic full time hobbyist programmer.
                            Currently I am Developing MERN Stack Website. I love to work with MongoDb, ExpressJs, 
                            ReactJs and NodeJs.
                        </p>
                        <div className='action_flex_start'><Action /></div>
                    </div>
                    <div className="about_img_div" data-aos="zoom-in">
                        <img src={myImg} alt="Oliullah" className='about_img' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;