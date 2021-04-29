import React from 'react';
import './CurriculumLink.css';

const CurriculumLink = (props) => {
  return (
    <div className='main curriculum link box'>
      <div className='main curriculum link pic'>
        <img
          src={props.src}
          className='main curriculum link background'
          alt='background pic'
        />
        <div className='main curriculum link body'>
          <p className='main curriculum link topic thai_head_1'>
            {props.topic}
          </p>
          <p className='main curriculum link info thai_body_1'>{props.info}</p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumLink;
