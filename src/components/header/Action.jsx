import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/oliullah_resume.pdf';

const Action = () => {
    return (
        <div className='actions'>
            <a href={resume} download className="btn">Download Resume</a>
            <Link to="/contact" className='btn-primary btn'>Talk With Me?</Link>
        </div>
    );
};

export default Action;