import React from 'react';

import { BsDot } from 'react-icons/bs';
import './AnnounceLink.css';

const AnnounceLink = (props) => {
  return (
    <div className='main announce box'>
      <BsDot
        className='main announce icon'
        display={props.notifications ? '' : 'none'}
      />
      <p className='main announce info thai_body_2'>{props.info}</p>
    </div>
  );
};

export default AnnounceLink;
