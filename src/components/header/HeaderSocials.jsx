import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/mohammad-oliullah-4421aa212/" target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/Oliulla" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://leetcode.com/Oliulla/" target="_blank" rel="noreferrer">
                <SiLeetcode />
            </a>
        </div>
    );
};

export default HeaderSocials;