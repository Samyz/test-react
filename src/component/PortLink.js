import React from 'react';

import './PortLink.css';
import { BsFillClockFill, BsClockFill } from 'react-icons/bs';

const PortLink = (props) => {
  return (
    <div className='port link body'>
      <div className='port link pic'>
        <img
          src={props.src}
          className='port link background'
          alt='background pic'
        />
      </div>
      <div className='port link data all'>
        <div className='port link data text'>
          <p className='port link data topic thai_head_4'>{props.data.topic}</p>
          <p className='port link data rank thai_bodyi_4'>{props.data.rank}</p>
          <p className='port link data info thai_body_4'>{props.data.info}</p>
        </div>
        <div className='port link data bottom all'>
          <BsFillClockFill className='port link data bottom icon' />
          <p className='port link data bottom date thai_bodyi_4'>
            {props.data.date}
          </p>
          <button
            type='button'
            className='port link data bottom button thai_body_4'
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortLink;
