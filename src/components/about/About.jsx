import React from 'react';
import "./About.css";
import myImg from "../../assets/my-img-1.jpg";

const About = () => {
    return (
        <section>
            <h2 className='btn_heading'>About Me</h2>
            <div className="container">
                <div className="about_container">
                    <div className="about_text_div">
                        <h2>text</h2>
                    </div>
                    <div className="about_img_div">
                        <img src={myImg} alt="Oliullah" className='about_img' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;