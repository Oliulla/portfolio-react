import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/md_oliullah_resume.pdf';

const Action = () => {
    return (
        <div className='actions'>
            <a href={resume} download className="btn_grad_two">Resume</a>
            <Link to="/contact" className='btn_grad_one'>Contact</Link>
        </div>
    );
};

export default Action;