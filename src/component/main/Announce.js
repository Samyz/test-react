import React from 'react';
import { Container } from 'react-bootstrap';
import './Announce.css';

import AnnounceList from './AnnounceList';

const Announce = () => {
  return (
    <div className='main announce all'>
      <div className='main announce tabTop'></div>
      <Container className='main announce body'>
        <p className='main announce topic thai_head_1'>ข่าวประชาสัมพันธ์</p>
        <AnnounceList />
        <button type='button' className='main announce button thai_body_2'>
          อ่านเพิ่มเติม
        </button>
      </Container>
      <div className='main announce tabBottom'></div>
    </div>
  );
};

export default Announce;
