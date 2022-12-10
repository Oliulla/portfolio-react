import React from 'react';
import resume from '../../assets/oliullah_resume.pdf';

const Action = () => {
    return (
        <div className='actions'>
            <a href={resume} download className="btn">Download Resume</a>
            <a href="#contact" className='btn-primary btn'>Talk With Me?</a>
        </div>
    );
};

export default Action;