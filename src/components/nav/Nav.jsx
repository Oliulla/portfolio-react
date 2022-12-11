import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineProject} from 'react-icons/ai';
import {BiMessageAltDetail} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <Link to="/" title='Home'><AiOutlineHome /></Link>
            <Link to="/projects" title='Projects'><AiOutlineProject /></Link>
            <Link to="/about" title='About'><AiOutlineUser /></Link>
            <Link to="/contact" title='Contact Me'><BiMessageAltDetail /></Link>
        </nav>
    );
};

export default Nav;